import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ProductsPages from "./Pages/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className=""> hello word </div>,
  },
  {
    path: "/login",
    element:<LoginPage/>
  },
  {
    path: "/register",
    element:<RegisterPage/>
  },
  {
    path: "/products",
    element:<ProductsPages/>
  }


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>
);
