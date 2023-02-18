import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { BreadcrumbsContextProvider } from './store/breadcrumbs.context';
import { TestsContextProvider } from './store/tests.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BreadcrumbsContextProvider>
      <TestsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TestsContextProvider>
    </BreadcrumbsContextProvider>
  </React.StrictMode>
);
