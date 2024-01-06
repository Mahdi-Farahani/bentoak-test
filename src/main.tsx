import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "./index.css";
import NavBar from "@/components/Navbar/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/Auth/Login.tsx";
import Register from "@/pages/Auth/Register.tsx";
import DashBoard from "@/pages/DashBoard/index.tsx";
import Products from "@/pages/DashBoard/Products/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Charts from "@/pages/DashBoard/Charts";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signIn",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <Register />,
  },
  {
    path: "/dashBoard/",
    element: <DashBoard />,
    children: [
      {
        path: "products/",
        element: <Products />,
      },
      {
        path: "charts/",
        element: <Charts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
