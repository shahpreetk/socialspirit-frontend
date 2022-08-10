import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { V_PROFILE, O_PROFILE } from '../constants/routes';
import EventCardsList from "../components/EventCardsList";
import { getAllEvents } from "../features/eventauth/eventauthSlice";
import Fuse from 'fuse.js';
import Search from "../components/Search";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { volunteer } = useSelector((state) => state.volunteerauth);
  const { organisation } = useSelector((state) => state.organisationauth);
  const { events } = useSelector((state) => state.eventauth);

  const getUpcomingEvents = () => {
    dispatch(getAllEvents());
    const upcoming = events.filter((event) => {
      const date = new Date(event.date);
      const today = new Date();
      return date > today;
    });
    setUpcomingEvents(upcoming);
  };

  const searchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchNow = (e) => {
    updateInput(search);
    if (!search || search === "") {
      setLoading(false);
      getUpcomingEvents();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchNow();
    }
  }

  const updateInput = async (search) => {
    setLoading(true);
    const options = {
      useExtendedSearch: true,
      keys: ['name', 'description', 'ownerName', 'tags'],
      includeScore: true,
    };
    const fuse = new Fuse(upcomingEvents, options);
    const searchResult = fuse.search(`'${search}`);


    if (search !== "" && searchResult.length > 0) {
      // @ts-ignore
      setFilteredEvents(searchResult);
      setTimeout(() => {
        setLoading(false);
      }, 150);
    } else {
      setFilteredEvents([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpcomingEvents();
    if (localStorage.getItem('organisation')) {
      if (!organisation.description || !organisation.city || !organisation.state || !organisation.country) {
        navigate(O_PROFILE);
      }
    }
    if (localStorage.getItem('volunteer')) {
      if (!volunteer.introduction || !volunteer.hobbies.length) {
        navigate(V_PROFILE);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organisation, navigate, volunteer]);

  const searchedEvents = filteredEvents.map((event) => {
    // @ts-ignore
    return event.item;
  });

  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
        <div>
          <div className="flex flex-col text-center items-center">
            <h6 className="text-4xl font-bold mx-2 mb-6">Easily find <span className="text-primary-focus">volunteering events of your interests</span> in your area!</h6>
            <Search search={search} searchChange={searchChange} searchNow={searchNow} handleKeyDown={handleKeyDown} />
          </div>
        </div>
      </div>
      {/* <EventCardsList events={upcomingEvents} /> */}
      {loading ? <div className="text-center">Loading Blogs...</div> :
        (
          searchedEvents && searchedEvents.length > 0 ? (
            <>
              <EventCardsList events={searchedEvents} />
            </>
          ) :
            (
              <>
                {!searchedEvents.length && <EventCardsList events={upcomingEvents} />}
              </>
            )
        )
      }
    </>
  );
};

export default Home;