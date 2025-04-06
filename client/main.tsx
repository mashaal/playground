import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { Suspense } from "react";
import { SWRConfig } from 'swr';

function localStorageProvider() {
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })
  
  return map
}

// Create a root element and render the app
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{provider:localStorageProvider, fetcher: (url) => fetch(url).then(res => res.json()), suspense: true }}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </SWRConfig>
  </React.StrictMode>,
);
