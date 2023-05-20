import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "src/App";
import {
  AddBrand,
  Brands,
  Categories,
  Dashboard,
  Login,
  Orders,
  Products,
  SubCategories,
  SubSubCategory,
} from "src/pages";
import Attribute from "src/pages/attribute/Attribute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      // Order routes
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "orders/pending",
        element: <Orders />,
      },
      {
        path: "orders/confirmed",
        element: <Orders />,
      },
      {
        path: "orders/processing",
        element: <Orders />,
      },
      {
        path: "orders/out-for-delivery",
        element: <Orders />,
      },
      {
        path: "orders/delivered",
        element: <Orders />,
      },
      {
        path: "orders/returned",
        element: <Orders />,
      },
      {
        path: "orders/failed",
        element: <Orders />,
      },
      {
        path: "orders/canceled",
        element: <Orders />,
      },
      //  end Order routes

      // Brands
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "brands/add",
        element: <AddBrand />,
      },
      // end brands

      // Categories

      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "sub-categories",
        element: <SubCategories />,
      },
      {
        path: "sub-sub-category",
        element: <SubSubCategory />,
      },

      // end Categories

      {
        path: "attributes",
        element: <Attribute />,
      },

      // Products

      {
        path: "products/in-house",
        element: <Products />,
      },
      {
        path: "products/seller/new",
        element: <Products />,
      },
      {
        path: "products/seller/approved",
        element: <Products />,
      },
      {
        path: "products/seller/denied",
        element: <Products />,
      },

      // end Products
    ],
  },
  {
    path:"*",
    element:<Navigate to="/" replace />
  }
]);

export default router;
