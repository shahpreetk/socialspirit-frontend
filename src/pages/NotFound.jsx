import React from 'react'
import { Link } from 'react-router-dom';
import { HOME } from "../constants/routes";

const NotFound = () => {
  return (
    <>
      <main
        className="min-h-full bg-cover bg-top sm:bg-top h-screen"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1487360920430-e18a62e59ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
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
      </main>
    </>
  )
}

export default NotFound
