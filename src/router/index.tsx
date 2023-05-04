import { createBrowserRouter } from "react-router-dom";
// import Search from "../components/search";
import SearchDetail from "../pages/SearchDetail";
import SearchSuggestions from "../components/search/SearchSuggestions";

const router = createBrowserRouter([
  {
    path: "",
    element: <SearchSuggestions />,
  },
  { path: "/:id", element: <SearchDetail /> },
]);

export default router;
