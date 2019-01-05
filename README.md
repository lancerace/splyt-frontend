# Atom Setup Guide
```
MenuBar > Package > Command Palette > Toggle > "Install package " in Search Bar
get necessary plugin
```
### Plugins

1. [atom-beautify](https://atom.io/packages/atom-beautify) - Format/Indent Code.

2. [atom-terminal](https://atom.io/packages/atom-terminal) - Open terminal with alt+shift+t.

3. [react](https://atom.io/packages/react) - react library for frontend development.

4. [Autocomplete-Module](https://atom.io/packages/autocomplete-modules) - autocomplete for babel language require/import statement.

5. [Language-Babel](https://atom.io/packages/language-babel) - JavaScript ES6 , JSX Syntax conversion to JS. (Specify js file to set as "Babel ES6 JavaScript" for feature to work on file such as .jsx .js extension)

6. #### Linter for javascript error detection
- [Linter](https://atom.io/packages/linter) - Visualize errors and other messages.
- [Linter-UI](https://atom.io/packages/linter-ui-default) - UI Bottom Bar to display error messages.

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

## Front-End Terminiology

Resource | ModuleBundler | View
-------- | -------- | -----
JS |
CSS |  ----> Webpack ----> bundle.js | -->  View
HTML(React) |

## Webpack

1. Set up Development Environment.
 - Make sure webpack and webpack-dev-server module is installed locally. Not recommended to install globally.

- webpack-dev-server uses port 8080 for localhost.

**Expected problem**
```
" Cannot find module "Webpack ". even though "npm i webpack webpack-cli --save-dev" is done.
   Reason: Your terminal might not have access to node_modules/.bin folder locally. Try using gitbash terminal to execute npm installation command.

```


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
## Appendix

1. [CSS FlexBox & Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout) - Updated Concept design Terminology for 2018-2019. Easier to design webpage without having to use floats and positioning.

2. [Css Grid over bootstrap advantages](https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163) - Advantages in using CSS Grid/FlexBox over bootstrap design

3.[Stateless and class component concept](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb) - Stateless and functional react componetn.
