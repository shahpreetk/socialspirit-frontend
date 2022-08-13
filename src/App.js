import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as ROUTES from "./constants/routes";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const VolunteerLogin = lazy(() => import("./pages/VolunteerLogin"));
const VolunteerRegister = lazy(() => import("./pages/VolunteerRegister"));
const OrganisationLogin = lazy(() => import("./pages/OrganisationLogin"));
const OrganisationRegister = lazy(() => import("./pages/OrganisationRegister"));
const VolunteerProfile = lazy(() => import("./pages/VolunteerProfile"));
const EachVolunteerProfile = lazy(() => import("./pages/EachVolunteerProfile"));
const OrganisationProfile = lazy(() => import("./pages/OrganisationProfile"));
const VolunteerAppliedEvents = lazy(() => import("./pages/VolunteerAppliedEvents"));
const VolunteerAcceptedEvents = lazy(() => import("./pages/VolunteerAcceptedEvents"));
const VolunteerRejectedEvents = lazy(() => import("./pages/VolunteerRejectedEvents"));
const OrganisationPastEvents = lazy(() => import("./pages/OrganisationPastEvents"));
const OrganisationUpcomingEvents = lazy(() => import("./pages/OrganisationUpcomingEvents"));
const EachEventPage = lazy(() => import("./pages/EachEventPage"));
const CreateEvent = lazy(() => import("./pages/CreateEvent"));
const NotFound = lazy(() => import("./pages/NotFound"));

axios.defaults.baseURL = "https://socialspirit-backend.herokuapp.com/api";

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="flex h-screen">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <img
                    className="h-24 w-auto"
                    src="/socialspiritLogo.png"
                    alt="loader logo"
                  />
                  <h1>Loading...</h1>
                </div>
              </div>
            </div>
          }
        >
          <Header />
          <div className="container mx-auto">
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path="/events" element={<Navigate to="/" />} />
              <Route path={ROUTES.EACH_EVENT} element={<EachEventPage />} />
              <Route path={ROUTES.V_LOGIN} element={<VolunteerLogin />} />
              <Route path={ROUTES.O_LOGIN} element={<OrganisationLogin />} />
              <Route path={ROUTES.V_REGISTER} element={<VolunteerRegister />} />
              <Route
                path={ROUTES.O_REGISTER}
                element={<OrganisationRegister />}
              />
              <Route path={ROUTES.V_PROFILE} element={<VolunteerProfile />} />
              <Route path={ROUTES.EACH_PROFILE} element={<EachVolunteerProfile />} />
              <Route
                path={ROUTES.O_PROFILE}
                element={<OrganisationProfile />}
              />
              <Route
                path={ROUTES.V_APPLIED_EVENTS}
                element={<VolunteerAppliedEvents />}
              />
              <Route
                path={ROUTES.V_ACCEPTED_EVENTS}
                element={<VolunteerAcceptedEvents />}
              />
              <Route
                path={ROUTES.V_REJECTED_EVENTS}
                element={<VolunteerRejectedEvents />}
              />
              <Route
                path={ROUTES.O_PAST_EVENTS}
                element={<OrganisationPastEvents />}
              />
              <Route
                path={ROUTES.O_UPCOMING_EVENTS}
                element={<OrganisationUpcomingEvents />}
              />
              <Route path={ROUTES.O_CREATE_EVENT} element={<CreateEvent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
