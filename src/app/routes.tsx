import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { CartPage } from "./pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/menu",
    Component: MenuPage,
  },
  {
    path: "/cart",
    Component: CartPage,
  },
]);
