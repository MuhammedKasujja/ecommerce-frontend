import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import { Dashboard, Login } from "src/pages";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
    {
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
