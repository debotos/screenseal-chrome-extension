import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

/*
  This file serves nothing except index.css in production!
  It's required for building process of create-react-app script
  Actually it is the starting point of create-react-app script
  So, Deleting this file will result as failing of 'yarn build' command 
*/

// Start [Dev only]
import WebFontLoader from 'webfontloader';
import App from './App';
import ScreenShot from './screens/ScreenShot';
WebFontLoader.load({
	google: {
		families: ['Roboto:300,400,500,700', 'Material Icons']
	}
});
const jsx = <App />;

ReactDOM.render(jsx, document.getElementById('root'));
// End
