import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// imports needed for i18next
import App from './App'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import "../../node_modules/flag-icons/css/flag-icons.min.css"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ['en', 'sq'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'navigator', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: './assets/locales/{{lng}}/translation.json',
    },
    // react : {
    //   useSuspense: false
    // },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const loadingMarkup = (
  <div className='flex h-screen'>
    <div className='m-auto'>
      <h3>Loading...</h3>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
