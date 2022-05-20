import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import Navbar from "./shared/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from './pages/Dashboard/Users';
import RequireAdmin from "./auth/RequireAdmin";


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          {/* Protected Routes  */}
          <Route element={<RequireAuth />}>
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="users" element={<RequireAdmin>
                <Users />
              </RequireAdmin>} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
