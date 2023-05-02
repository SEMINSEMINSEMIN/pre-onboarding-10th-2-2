import { createBrowserRouter } from "react-router-dom";
import Search from "../components/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
]);

export default router;
