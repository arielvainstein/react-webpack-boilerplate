import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import ErrorBoundary from "./app/components/ErrorBoundaries";
import { AuthenticationProvider } from "./app/context/authentication";

const container = document.getElementById("react-app");
const root = createRoot(container);
root.render(
  <ErrorBoundary fallback={<p>Something went wrong</p>}>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </ErrorBoundary>
);
