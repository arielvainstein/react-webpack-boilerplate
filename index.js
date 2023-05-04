import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import ErrorBoundary from './app/components/errorBoundaries';

const container = document.getElementById("react-app");
const root = createRoot(container);
root.render(
  <ErrorBoundary fallback={<p>Something went wrong</p>}>
    <App />
  </ErrorBoundary>
);
