import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/Login/Login.jsx";
import Error from "./routes/Error/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeProvider } from "./context/HomeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeProvider>
      <RouterProvider router={router} />
    </HomeProvider>
  </StrictMode>
);
