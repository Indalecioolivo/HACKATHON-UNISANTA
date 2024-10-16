import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeProvider } from "./context/HomeContext.jsx";
import App from "./App.jsx";
import Login from "./routes/Login/Login.jsx";
import MyProjects from "./routes/MyProjects/MyProjects.jsx";
import Discover from "./routes/Discover/Discover.jsx";
import Error from "./routes/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/myprojects",
        element: <MyProjects />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
    ],
  },
  {
    path: "/login",
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
