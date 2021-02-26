# Documentation

I wrote this documentation for anyone that happens to run across my site and wonder how
it works. It also serves the purpose of reminding myself how my own code works 😊

- [File Structure](#File-Structure)
- [Tooling](#Tooling)
  - [ESLint](#ESLint)
  - [StyleLint](#StyleLint)

## File Structure

I try to follow a consistent and intuitive file structure.

Starting at the root:

```
bryan.pan
├── .github/       # Stores all my workflows and GitHub Actions
├── ...
├── public/        # My index.html goes here (it only serves as a template)
├── scripts/       # Any bash scripts I have go here        
├── src/           # Website magic happens here
└── ...
```

In the root, there also exists all my files needed for any [tooling](#tooling) I have.

Looking at the source code:

```
src
├── assets/
|   └── ...
├── components/
│   ├── content/
│   │   ├── [page].json
|   |   └── generateContent.ts
│   ├── shared/
│   │   ├── Content/
│   │   ├── Progress/
│   │   ├── Splash/
│   │   ├── Layout.tsx
│   │   └── Toggle.tsx
│   ├── styles/
│   │   └── [Component].scss
│   └── [Component].tsx
├── utils/
|   └── ...
├── global.scss
└── index.tsx
```

| Directory | Purpose |
| --- | --- |
| `src/assets` | all the assets are stored here |
| `src/components` | all components are stored here |
| `src/components/content` | page content generation and information are stored here |
| `src/components/shared` | shared components are stored here |
| `src/components/styles` | all styles are stored here (each style mirrors its component in naming) |
| `src/utils` | any utility functions go here |

## Tooling

I use two sets of linters to keep my code clean and, hopefully, readable!

### ESLint

I use ESLint for my TypeScript files (`**/*.ts` and `**/*.tsx`). ESLint has really 
fantastic functionality for linting JavaScript code so naturally I picked it to lint my
logic.

Notable Linter Rules:
- no-console: dont litter 🗑
- single quotes: uniformity is key 
- 2 space indentation: I like skinny, readable code
- max line length 120: 👍

See the documented [`.eslintrc.js`](.eslintrc.js) file for more info.

**Note:** I dont run `yarn lint` on `build` or `start`. This means you can avoid linter 
rules during development (console logging 👀), and clean up your code on pull request,
or in some case, never 😊

### StyleLint

I use StyleLint for the styled components (`**/*.css` and `**/*.scss`). I use the 
recommended sass linter rules. However, if you have any recommendations on code style for 
styled components, please drop me an issue and I would be happy to look into it!

See our [`.stylelintrc.json`](.stylelintrc.json) file for more info.