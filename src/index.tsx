import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const authDomain = 'dev-nx4a8l6a.eu.auth0.com';
const authClientId = '3ZXrLKI0xulQ6F2kTL8H8q47zJq1j3Cl';
const authRedirectUri = 'http://localhost:3000';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authDomain}
      clientId={authClientId}
      redirectUri={authRedirectUri}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
