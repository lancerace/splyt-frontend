## Atom ide setup
https://gist.github.com/lancerace/0daa9f8ff33eab8554c9c1a83a66b536


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
