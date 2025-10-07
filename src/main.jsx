import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import DestinationPage from "./components/DestinationPage/DestinationPage.jsx";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage.jsx";
import NasaCollaboration from "./components/NasaCollaborationPage/NasaCollaborationPage.jsx";
import "./main.css";
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/destination",
    element: <DestinationPage />,
  },
  {
    path: "/about_us",
    element: <AboutUsPage />,
  },
  {
    path: "/nasa_collaboration",
    element: <NasaCollaboration />,
  },

*/

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { 
          index: true,
          element: <HomePage /> 
      },
      {
        path: "/destination",
        element: <DestinationPage />,
      },
      {
        path: "/about_us",
        element: <AboutUsPage />,
      },
      {
        path: "/nasa_collaboration",
        element: <NasaCollaboration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);