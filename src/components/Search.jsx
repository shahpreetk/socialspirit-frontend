import React from 'react';
import { IoSearch } from "react-icons/io5";

const Search = ({ search, searchChange, searchNow, handleKeyDown }) => {
  return (
    <>
      <div className="form-control">
        <div className="input-group">
          <input type="text"
            name="search"
            id="search"
            value={search}
            onChange={searchChange}
            onKeyDown={handleKeyDown}
            aria-autocomplete="none"
            autoComplete="off" placeholder="Search…" className="input input-bordered md:w-96 " />
          <button className="btn btn-square" onClick={searchNow}>
            <IoSearch className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;