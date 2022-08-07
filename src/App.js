import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as ROUTES from "./constants/routes";
import Header from "./components/Header";
import Home from "./pages/Home";
import VolunteerLogin from "./pages/VolunteerLogin";
import VolunteerRegister from "./pages/VolunteerRegister";
import OrganisationLogin from "./pages/OrganisationLogin";
import OrganisationRegister from "./pages/OrganisationRegister";
import VolunteerProfile from "./pages/VolunteerProfile";
import OrganisationProfile from "./pages/OrganisationProfile";
import VolunteerEvents from "./pages/VolunteerEvents";
import OrganisationPastEvents from "./pages/OrganisationPastEvents";
import OrganisationUpcomingEvents from "./pages/OrganisationUpcomingEvents";
import Footer from "./components/Footer";

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
            <Route
              path={ROUTES.O_REGISTER}
              element={<OrganisationRegister />}
            />
            <Route path={ROUTES.V_PROFILE} element={<VolunteerProfile />} />
            <Route path={ROUTES.O_PROFILE} element={<OrganisationProfile />} />
            <Route path={ROUTES.V_EVENTS} element={<VolunteerEvents />} />
            <Route path={ROUTES.O_PAST_EVENTS} element={<OrganisationPastEvents />} />
            <Route path={ROUTES.O_UPCOMING_EVENTS} element={<OrganisationUpcomingEvents />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
