import Home from "./screens/home'/Home.jsx";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./screens/Login/Login.jsx";
import SignUp from "./screens/signin/SignIn.jsx";
import Write from "./screens/Write/Write.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Settings from "./components/settings/Settings.jsx";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<Login />} path="login"></Route>
          <Route element={<SignUp />} path="signup"></Route>
          <Route element={<Write />} path="write"></Route>
          <Route element={<Settings />} path="setting"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
