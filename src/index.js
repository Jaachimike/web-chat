import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from "firebase/app";
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyAgyUNiRBUsmviEoqYxLurlJ2Hxxb2RQDE",
  authDomain: "web-chat-38d20.firebaseapp.com",
  projectId: "web-chat-38d20",
  storageBucket: "web-chat-38d20.appspot.com",
  messagingSenderId: "720710887256",
  appId: "1:720710887256:web:6dcbff632f855be785a72d",
  measurementId: "G-QKKG256YKW"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
