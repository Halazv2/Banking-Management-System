import {Navigate, useRoutes} from "react-router-dom";
import {useState, useEffect} from "react";
// pages
import Landing from "./pages/Landing";
import TopNavbar from "../src/components/Nav/TopNavbar";
import NotFound from "./pages/error/404";
import UnAuthorized from "./pages/error/401";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/admin/Dashboard";
import DashboardUser from "./pages/admin/DashboardUser";
import BankStatement from "./pages/admin/BankStatement";

function App() {
  const token = localStorage.getItem("token");
  const [isAuthanticated, setIsAuthanticated] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthanticated(true);
    }
  }, [token]);

  const routes = useRoutes([
    {path: "/", element: <Landing />},
    {path: "/unauthorized", element: <UnAuthorized />},
    {path: "/404", element: <NotFound />},
    {path: "*", element: <Navigate to='/404' />},
    {path: "/sign-in", element: <Login />},
    {path: "/create-account", element: <Signup />},
  ]);

  const authanticatedRoutes = useRoutes([
    {path: "/", element: <Dashboard />},
    {path: "/Transactions", element: <DashboardUser />},
    {path: "/BankStatement", element: <BankStatement />},
    {path: "/unauthorized", element: <UnAuthorized />},
    {path: "/404", element: <NotFound />},
    // {path: "*", element: <Navigate to='/404' />},
  ]);

  return (
    <>
      {!isAuthanticated ? (
        <>
          <TopNavbar />
          {routes}
        </>
      ) : (
        <>{authanticatedRoutes}</>
      )}
    </>
  );
}

export default App;
