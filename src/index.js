import React from 'react';
import ReactDOM from 'react-dom';
 
import './index.css';
import * as serviceWorker from './serviceWorker';
 
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
 
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    {/* initialling the firebaseContext provider for only one time */}
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();

