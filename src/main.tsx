import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "./index.css";

import i18n from "./i18n/i18n";
import router from "./router/createBrowserRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
