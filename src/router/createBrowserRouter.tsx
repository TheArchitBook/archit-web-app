import { ROUTES } from "@constants/shared";
import ErrorPage from "@pages/Error/Error";
import HomePage from "@pages/Home/Home";
import Root from "@pages/Root/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
