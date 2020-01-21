import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router, browserHistory } from "react-router";
import getRoutes from "./routes";
import ThemeDefault from './theme-default';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById("root");

const router = <Router history={browserHistory} routes={getRoutes()} />;

ReactDOM.render(
	<MuiThemeProvider muiTheme={ThemeDefault}>
		{router}
	</MuiThemeProvider>, 
	rootElement
	);
registerServiceWorker();
