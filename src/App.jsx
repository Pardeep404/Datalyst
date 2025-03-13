import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./component/Contact";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import PrivacyPolicy from "./component/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy", element: <PrivacyPolicy /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
