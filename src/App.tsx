import { RouterProvider } from "react-router-dom";
import router from "./router";
import { GlobalStyle } from "./app.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
