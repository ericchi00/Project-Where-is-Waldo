import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './style/App.css';
import { initializeApp } from 'firebase/app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
