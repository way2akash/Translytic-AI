import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppcontentProvider } from './Context/ContentSharingProvider';

const root = ReactDOM.createRoot(document.getElementById('yt-ai-app'));
root.render(
    <AppcontentProvider>
        <App />
    </AppcontentProvider>
);
