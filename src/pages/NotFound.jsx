import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from "../constants/routes";

const NotFound = () => {
  return (
    <>
      <main
        className="min-h-full min-w-full bg-cover bg-top sm:bg-top h-screen m-0"
        style={{
          backgroundImage: `url("/error404/404image.jpg")`,
        }}
      >
        <div className="min-h-full min-w-full bg-cover bg-top sm:bg-top h-screen m-0" style={{
          overflow: "hidden",
          // background: "black",
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          objectFit: "cover",
        }}>
          <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-sm font-semibold text-black text-opacity-70 uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-neutral-700 tracking-tight sm:text-5xl">
              Uh oh! I think you’re lost.
            </h1>
            <p className="mt-2 text-lg font-medium text-black text-opacity-70">
              It looks like the page you’re looking for doesn't exist.
            </p>
            <div className="mt-6">
              <Link
                to={HOME}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-secondary  bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;

