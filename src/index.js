import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import "typeface-roboto";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Store from './Store/store.js';

const rootDocument = document.getElementById('root');
const theme = createMuiTheme({
	palette:{
		primary : {
			light: "#efebe9",
			main: "#795548",
			dark: "#3e2723",
			contrastText : '#fff'
		},
		secondary : {
			light: "#cfd8dc",
			main: "#607d8b",
			dark: "#263238",
			contrastText : '#fff'
		},

	}
})

const WithTheme = () => (
	<MuiThemeProvider theme={theme} >
		<Provider store={Store}>
			<App />
		</Provider>
	</MuiThemeProvider>
)

ReactDOM.render(<WithTheme />, rootDocument);
serviceWorker.unregister();
