import React from "react";
import "./App.css";
import '@fontsource/poppins'; // Defaults to 400 weight
import '@fontsource/poppins/600.css'; // Specific weight
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";

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
