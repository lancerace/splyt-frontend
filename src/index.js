//import { export1 , export2 } from "module-name";
import React, {Component} from 'react'; //sets the name Component to the default export of the 'react' package
import ReactDOM from 'react-dom';
import App from './App';
/* react-hot-loader provide <AppContainer> that handle hot reloading and error handling.
   Note that <AppContainer> should only wrap a single React component. Mount code inside module.hot.accept() function.
   documentation: https://github.com/gaearon/react-hot-loader
*/
import {AppContainer} from 'react-hot-loader';

ReactDOM.render(<AppContainer><App/ ></AppContainer>, document.getElementById('reactApps'));


render(App);

if (module.hot)
//wrap root module to hot.accept() function
module.hot.accept('./App', () => {render(App)});
