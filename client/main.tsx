import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { Suspense } from "react";
import { SWRConfig } from 'swr';

// Create a root element and render the app
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: (url) => fetch(url).then(res => res.json()) }}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </SWRConfig>
  </React.StrictMode>,
);
