import { Route, Routes } from "react-router-dom";
import RequireAdmin from "./auth/RequireAdmin";
import RequireAuth from "./auth/RequireAuth";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Services from "./pages/Services";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from './routes/PublicRoutes';


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            PublicRoutes.map((route, index) => <Route
              key={index}
              path={route.path}
              element={<route.Component />}
            />)
          }
          <Route element={<RequireAuth />}>
            {
              PrivateRoutes.map((route, index) => <Route
                key={index}
                path={route.path}
                element={<route.Component />}
              />)
            }
          </Route>
          <Route element={<RequireAdmin />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
