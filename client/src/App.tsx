import {Navigate, useRoutes} from "react-router-dom";
// pages
import Landing from "./pages/Landing";
import TopNavbar from "../src/components/Nav/TopNavbar";
import NotFound from "./pages/error/404";
import UnAuthorized from "./pages/error/401";

function App() {
  const routes = useRoutes([
    {path: "/", element: <Landing />},
    {path: "/unauthorized", element: <UnAuthorized />},
    {path: "/404", element: <NotFound />},
    {path: "*", element: <Navigate to='/404' />},
  ]);

  return (
    <>
      <TopNavbar />
      {routes}
    </>
  );
}

export default App;
