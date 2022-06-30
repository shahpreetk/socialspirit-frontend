import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as ROUTES from "./constants/routes";
import Header from "./components/Header";
import Home from "./pages/Home";
import VolunteerLogin from "./pages/VolunteerLogin";
import VolunteerRegister from "./pages/VolunteerRegister";
import OrganisationLogin from "./pages/OrganisationLogin";
import OrganisationRegister from "./pages/OrganisationRegister";
import VolunteerProfile from "./pages/VolunteerProfile";
import OrganisationProfile from "./pages/OrganisationProfile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.V_LOGIN} element={<VolunteerLogin />} />
            <Route path={ROUTES.O_LOGIN} element={<OrganisationLogin />} />
            <Route path={ROUTES.V_REGISTER} element={<VolunteerRegister />} />
            <Route path={ROUTES.O_REGISTER} element={<OrganisationRegister />} />
            <Route path={ROUTES.V_PROFILE} element={<VolunteerProfile />} />
            <Route path={ROUTES.O_PROFILE} element={<OrganisationProfile />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
