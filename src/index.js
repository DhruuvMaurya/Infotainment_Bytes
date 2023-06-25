import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Collaborations from "pages/Collaborations";
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Suggestions from "pages/Suggestions";
import Category from "pages/Category";
import SupportUs from "pages/SupportUs";
import ContactUs from "pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/collaborations",
    element: <Collaborations />,
  },
  {
    path: "/suggestions",
    element: <Suggestions />,
  },
  {
    path: "/support-us",
    element: <SupportUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
