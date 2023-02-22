import { RouterProvider } from "react-router-dom";
import "./App.scss";
import { Router } from "./routes/routes";



function App() {
  const routes = Router()
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
