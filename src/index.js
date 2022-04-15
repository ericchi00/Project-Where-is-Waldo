import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './style/App.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

initializeApp(firebaseConfig);
