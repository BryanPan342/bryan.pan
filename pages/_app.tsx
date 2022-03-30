import {AppProps} from 'next/app';
import Script from 'next/script';
import React from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-158883963-3" />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-158883963-3', {page_path: window.location.pathname});
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
