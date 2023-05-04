import { createBrowserRouter } from "react-router-dom";
import Search from "../components/search";
import SearchDetail from "../pages/SearchDetail";

const router = createBrowserRouter([
  {
    path: "",
    element: <Search />,
  },
  { path: "/:id", element: <SearchDetail /> },
]);

export default router;
