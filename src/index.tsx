import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next, { init } from 'i18next';
import common_ua from "./translations/ua/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'ua',
  resources: {
    ua: {
      common: common_ua,
    },
    en: {
      common: common_en,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
