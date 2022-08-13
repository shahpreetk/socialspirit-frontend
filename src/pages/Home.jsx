import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { V_PROFILE, O_PROFILE } from '../constants/routes';
import EventCard from "../components/EventCard";
import { getAllEvents } from "../features/eventauth/eventauthSlice";
import Fuse from 'fuse.js';
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const { volunteer } = useSelector((state) => state.volunteerauth);
  const { organisation } = useSelector((state) => state.organisationauth);

  const { events, upcomingEvents, isLoading, isSuccess, isError, message } = useSelector((state) => state.eventauth);

  const searchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchNow = (e) => {
    updateInput(search);
    if (!search || search === "") {
      setLoading(false);
    }
  };
  /**
   * @desc Searching events on press of enter key
   * {@link https://stackoverflow.com/a/31273404/15466726}
   * @author wuct
   */
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      searchNow();
    }
  };

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
    if (!volunteer && !organisation) {
      dispatch(getAllEvents());
    }
    else if (volunteer && !organisation) {
      dispatch(getAllEvents());
    }
    else if (!volunteer && organisation) {
      dispatch(getAllEvents());
    }

    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess && upcomingEvents) {
      setLoading(false);
    }


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
  }, [isError, isSuccess, message, navigate, dispatch]);



  const searchedEvents = filteredEvents.map((event) => {
    // @ts-ignore
    return event.item;
  });

  if (isLoading || loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
        <div>
          <div className="flex flex-col text-center items-center">
            <h6 className="text-4xl font-bold mx-2 mb-6">Easily find <span className="text-primary-focus">volunteering events of your interests</span> in your area!</h6>
            <Search search={search} searchChange={searchChange} searchNow={searchNow} handleEnterKey={handleEnterKey} />
          </div>
        </div>
      </div>
      {loading ? <div className="text-center">Loading Events...</div> :
        (
          searchedEvents && searchedEvents.length > 0 ? (
            <>
              <EventCard events={searchedEvents} />
            </>
          ) :
            (
              <>
                {upcomingEvents && !searchedEvents.length && events && <EventCard events={upcomingEvents} />}
              </>
            )
        )
      }
    </>
  );
};

export default Home;