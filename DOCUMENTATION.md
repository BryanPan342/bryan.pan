# Documentation

I wrote this documentation for anyone that happens to run across my site and wonder how
it works. It also serves the purpose of reminding myself how my own code works 😊

- [File Structure](#File-Structure)
- [Page Generation](#Page-Generation)
  - [Layout](#Layout)
  - [Content](#Content)
  - [Content Generation](#Content-Generation)
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

## Page Generation

I designed my pages in a way that is consistent across different pages. Because of this,
I can utilize React to minimize the amount of work I need to do as a front end developer.

I accomplish this by defining a `Layout` component and `Content` components.

### Layout

The [`Layout`](src/components/shared/Layout.tsx) primarily serves the purpose of 
standardizing the layout of each page. It also handles the logic for triggering 
animations! It's a nice to have component that lets me write logic that affects every 
page.

### Content

The [`Content`](src/components/shared/Content/index.tsx) serves to standardize the content
of each page. Along with the root `Content` component, I have other helper components
to make content generation easier.

| Content Type | Description |
| --- | --- |
| [`Image`](src/components/shared/Content/Image.tsx) | Image content is defined here |
| [`Links`](src/components/shared/Content/Links.tsx) | Links content is defined here |
| [`TextBlock`](src/components/shared/Content/TextBlock.tsx) | Larger text blocks content is defined here |
| [`TextList`](src/components/shared/Content/TextList.tsx) | Lists (single or split) are defined here |

### Content Generation

In order to generate all this content, I have a utility function that generates each
component.

In the directory `src/components/content`, I have all the `json` files that hold
all my content information, along with a `generateContent` function that will generate each section based on the input given by generateContent. 

**Note:** This definitely can be more efficient and I'm thinking about migrating to 
`Next.js` and putting all this information in Contentful to make my life easier.

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