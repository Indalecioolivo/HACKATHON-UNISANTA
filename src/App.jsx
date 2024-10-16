import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./modules/header/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
