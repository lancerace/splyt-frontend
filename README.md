# Atom Setup Guide

```
MenuBar > Package > Command Palette > Toggle > "Install package " in Search Bar
get necessary plugin
```

#### Atom freeze Solution
```
atom --clear-window-state.
```
## Plugins
#### Code Format/beautify
1. [atom-beautify](https://atom.io/packages/atom-beautify) - Format/Indent Code for **javascript only** .
   #### Settings
   - [ ] JSX Format File on save. - As for JSX, use prettier-atom. (Scroll down to section 2.3)
   - [x] JSX disable beautifying language. - use prettier-atom formatter. (Scroll down to section 2.3)
   - [ ] Javascript Beautify On save - use prettier-atom formatter. (Scroll down to section 2.3)

#### Package configuration
- JSX -> Pretty Diff
- JavaScript -> Prettier

2. #### Linter for Javascript/jsx error detection

- [Linter](https://atom.io/packages/linter) - Visualize errors and other messages.
- [Linter-UI](https://atom.io/packages/linter-ui-default) - UI Bottom Bar to display error messages.
- [Linter-eslint](https://atom.io/packages/linter-eslint) - Eslint for atom. Global install this.
   in lint configuration file. .eslintrc.js/json
   - #### Plugin for Linter-esLint
   - 2.1.[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) - popular airbnb eslint rules
   - 2.2.[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - JSX/React support eslint
   - 2.3.[babel-eslint](https://github.com/babel/babel-eslint) - JSX lint  Global install this
- [prettier-atom](https://atom.io/packages/prettier-atom) - integrate with Eslint.
   #### Settings
   - [x] ESLint Integration
   - [x] Format File on save
   - [x] Ignore Files in 'eslintignore'
   - [x] Show in Status Bar
   - [x] Run Prettier last . **Reason: Referencing prettier formatting rule based from .prettierrc config file **


3. [atom-terminal](https://atom.io/packages/atom-terminal) - Open terminal with alt+shift+T.

4. [react](https://atom.io/packages/react) - react library for frontend development.

   4.1 [react-snippets](https://atom.io/packages/react-snippets) - generate skeleton code fast and etc.

5. [Autocomplete-Module](https://atom.io/packages/autocomplete-modules) - autocomplete for babel language require/import statement.

6. [Language-Babel](https://atom.io/packages/language-babel) - JavaScript ES6 , JSX Syntax conversion to JS. (Specify js file to set as "Babel ES6 JavaScript" for feature to work on file such as .jsx .js extension)

7. [Minimap](https://atom.io/packages/minimap)

- Bookmarking line
- Display cursor line
- Etc

8. [Color-Picker](https://atom.io/packages/color-picker) - Color picker UI for hexadecimal.

9. [docblockr](https://atom.io/packages/docblockr) - Comment code generator.

10. [js-hyperclick](https://atom.io/packages/js-hyperclick) - JS Go to definition for variables.

11. [tree-view-copy-relative-path](https://atom.io/packages/tree-view-copy-relative-path) - Copy relative path to file from tree view. Right Click targeted file and click relative path.

12. [atom-preview-html](https://atom.io/packages/atom-html-preview) - Preview of html viewer within atom. Ctrl+Shift+H to open previewr.

13. [autoclose-html](https://atom.io/packages/autoclose-html) - Autoclose for html.

14. [atom-ternjs](https://atom.io/packages/atom-ternjs) - JavaScript code intelligence for atom.(HTML/CSS/JS/React Specific Packages)

## known issue
### Atom
Opening large file result in atom hanging. Solution: Atom CMD(Ctrl+Shift+P) -> Settings -> Core -> Warn on Large File Limit -> Default 40MB .(Set to your desired MB)
### Missing module plugin prettier related but exist in package.json
Solution: reinstall all modules.
   - [link](https://stackoverflow.com/questions/19106284/how-do-you-uninstall-all-dependencies-listed-in-package-json-npm)




## Front-End Terminiology

| Resource    | ModuleBundler                 | View     |
| ----------- | ----------------------------- | -------- |
| JS          |
| CSS         | ----> Webpack ----> bundle.js | --> View |
| HTML(React) |

## Webpack

1. Set up Development Environment.

- Make sure webpack and webpack-dev-server module is installed locally. Not recommended to install globally.

- webpack-dev-server uses port 8080 for localhost.

**Expected problem**

```
" Cannot find module "Webpack ". even though "npm i webpack webpack-cli --save-dev" is done.
   Reason: Your terminal might not have access to node_modules/.bin folder locally. Try using gitbash terminal to execute npm installation command.

```

2. Using SourceMap to debug.
   SourceMap not generated on firefox/chrome browser debugging view etc..

**Solution**
Use the correct sourcemap that fit the env (Production/Dev). E.g eval-source-map for dev, source-map for prod.

## To use

Clone project. Open CLI and execute

- npm install
- npm install --only=dev

## For fast transfer Atom packages & settings to other computer.

Create a public or private Git repo and store the contents of your local ~/.atom folder

add in git ignore with configuration listed below.

```
storage
compile-cache
dev
.npm
.node-gyp
```




## Payment Gateway
- MasterCard API
- Paypal API

## Appendix

### CSS

- [CSS FlexBox & Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout) - Updated Concept design Terminology for 2018-2019. Easier to design webpage without having to use floats and positioning.

- ### Dynamic CSS & CSS Module in React

  - [1](https://reactjs.org/docs/dom-elements.html) - CSS Style with React
  - [2](https://www.javascriptstuff.com/css-modules-by-example/)- CSS Modularity

- ### React reusable componetn styling revolution.

  - [1] Classnames with inline styling

  - [2] CSS Module with css-loader in webpack to create modularity. However,reusable component has limitation. It does not allow you to have your own custom-ized styling.

  - [3] **Solution**: Styled-Component library

- [Css Grid over Bootstrap advantages](https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163) - Advantages in using CSS Grid/FlexBox over bootstrap. Bootstrap 4 includes flexbox but not CSS Grid.

### React Components

- [Stateless and class component concept](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb) - Stateless and functional react component.
- **Reusable Components** . By convention,name your js file as 'index.js' as node will resolve import firstly by pointing to 'index.js'.

#### State management
- React hook. (Released 2 feb 2019)

#### Web dev server help sourcemap
- [HMR related issue](https://medium.com/code-oil/burning-questions-with-answers-to-why-webpack-dev-server-live-reload-does-not-work-6d6390277920)

#### philosophy of conditional css module styling
- https://stackoverflow.com/questions/42587507/css-modules-referencing-classes-from-other-modules
- [overridding style with custom style](https://github.com/gajus/react-css-modules#loops-and-child-components)
- [toggle add style](https://stackoverflow.com/questions/41621395/how-to-toggle-and-add-a-stylename-to-a-react-component)
- [passing class name](https://stackoverflow.com/questions/32230635/passing-in-class-names-to-react-components)

#### package.json README
    "//": [
      "webpack-dev-server does not compile files in-memory.(does not produce bundle.js in dist folder)",
      "Hence,set publicPath to product desired output."
    ],



## Single Page Application Routing
https://www.fullstackreact.com/30-days-of-react/day-17/
https://tylermcginnis.com/react-router-cannot-get-url-refresh/
