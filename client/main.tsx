import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { Suspense } from "react";
import { SWRConfig } from "swr";
import ErrorBoundary from "./utils/ErrorBoundary";
import localStorageProvider from "./utils/localStorage";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        provider: localStorageProvider,
        fetcher: (url) => fetch(url).then((res) => res.json()),
        suspense: true,
      }}
    >
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </SWRConfig>
  </React.StrictMode>,
);
