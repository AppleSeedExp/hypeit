import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { SideBar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Setting";
import { MyStore } from "./pages/MyStore";
import { Revenue } from "./pages/Revenue";
import { Integraions } from "./pages/Integrations";
import { SignIn } from "./pages/SignIn";
import { store } from "./Store";
import { Footer } from "./components/Footer";
import { Link } from "./pages/Link";
import { Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

//Redux
import { Provider } from "react-redux";
import Rstore from "./ReduxStore";

function App() {
  const [header, setHeader] = store.useState("Header");

  return (
    <div>
      <Provider store={Rstore}>
        <Router>
          <Routes>
            <Route exact path="" element={<Navigate to="/login" replace />} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/dashboard" Component={Dashboard}>
              <Route path="/dashboard" element={<Home />}></Route>
              <Route path="/dashboard/home" element={<Home />}></Route>
              <Route path="/dashboard/mystore" element={<MyStore />}></Route>
              <Route path="/dashboard/revenue" element={<Revenue />}></Route>
              <Route
                path="/dashboard/integrations"
                element={<Integraions />}
              ></Route>
              <Route path="/dashboard/settings" element={<Settings />}></Route>
              <Route path="/dashboard/signin" element={<SignIn />}></Route>
              <Route path="/dashboard/link" element={<Link />}></Route>
              <Route path="*" element={<Navigate to="/home" replace />}></Route>
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
