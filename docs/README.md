# Documentation

I wrote this documentation for anyone that happens to run across my site and wonder how
it works. It also serves the purpose of reminding myself how my own code works 😊

- [Tooling](#Tooling)
  - [ESLint](#ESLint)
  - [StyleLint](#StyleLint)

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

**Note:** I dont run `yarn lint` on `build` or `dev`. This means you can avoid linter 
rules during development (console logging 👀), and clean up your code on pull request,
or in some case, never 😊

### StyleLint

I use StyleLint for the styled components (`**/*.css` and `**/*.scss`). I use the 
recommended sass linter rules. However, if you have any recommendations on code style for 
styled components, please drop me an issue and I would be happy to look into it!

See our [`.stylelintrc.json`](.stylelintrc.json) file for more info.