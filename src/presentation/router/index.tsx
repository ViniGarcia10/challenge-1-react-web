import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Success } from "../pages/Success";
import { AppRoutes } from "./routes";

export function Router() {
  const router = createBrowserRouter([
    {
      path: AppRoutes.HOME,
      element: <Home />,
    },
    {
      path: AppRoutes.CART,
      element: <Cart />,
    },
    {
      path: AppRoutes.SUCCESS,
      element: <Success />,
    },
  ]);

  return <RouterProvider router={router} />;
}
