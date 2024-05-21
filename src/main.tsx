import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";

import i18n from "./i18n/i18n";
import theme from "./theme/theme";
import router from "./router/createBrowserRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
