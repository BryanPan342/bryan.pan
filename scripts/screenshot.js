#!/usr/bin/env node

/* eslint-disable no-console */
const { spawn } = require('child_process');
const { mkdirSync } = require('fs');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || '3000';
const BASE_URL = process.env.SCREENSHOT_BASE_URL || `http://localhost:${PORT}`;
const OUTPUT_DIR = process.env.SCREENSHOT_DIR || path.join(process.cwd(), 'screenshots');
const SHOULD_START_SERVER = process.env.SCREENSHOT_START_SERVER !== 'false';
const SERVER_COMMAND = process.env.SCREENSHOT_SERVER_COMMAND || 'yarn';
const SERVER_ARGS = (process.env.SCREENSHOT_SERVER_ARGS || `dev -p ${PORT}`).split(' ').filter(Boolean);
const TIMEOUT_MS = Number(process.env.SCREENSHOT_TIMEOUT_MS || 60_000);

const viewports = [
  { name: 'desktop', width: 1440, height: 1200 },
  { name: 'mobile', width: 390, height: 1200 },
];

const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
];

function loadPlaywright() {
  try {
    return require('playwright');
  } catch (_err) {
    console.error('Playwright is not installed in this checkout.');
    console.error('Install it locally with: yarn add --dev playwright && yarn playwright install chromium');
    console.error('Then run: yarn run screenshot');
    process.exit(1);
  }
}

function waitForServer(url, timeoutMs) {
  const startedAt = Date.now();

  return new Promise((resolve, reject) => {
    const check = () => {
      const req = http.get(url, (res) => {
        res.resume();
        if (res.statusCode && res.statusCode < 500) {
          resolve();
          return;
        }
        retry();
      });

      req.on('error', retry);
      req.setTimeout(2_000, () => {
        req.destroy();
        retry();
      });
    };

    const retry = () => {
      if (Date.now() - startedAt > timeoutMs) {
        reject(new Error(`Timed out waiting for ${url}`));
        return;
      }
      setTimeout(check, 500);
    };

    check();
  });
}

async function main() {
  const { chromium } = loadPlaywright();
  mkdirSync(OUTPUT_DIR, { recursive: true });

  let server;
  if (SHOULD_START_SERVER) {
    server = spawn(SERVER_COMMAND, SERVER_ARGS, {
      cwd: process.cwd(),
      env: { ...process.env, PORT },
      stdio: 'inherit',
    });
  }

  try {
    await waitForServer(BASE_URL, TIMEOUT_MS);
    const browser = await chromium.launch({ headless: true });

    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();

      for (const target of pages) {
        const url = new URL(target.path, BASE_URL).toString();
        const outputPath = path.join(OUTPUT_DIR, `${target.name}-${viewport.name}.png`);
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.screenshot({ path: outputPath, fullPage: true });
        console.log(`Saved ${outputPath}`);
      }

      await context.close();
    }

    await browser.close();
  } finally {
    if (server) {
      server.kill('SIGTERM');
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
