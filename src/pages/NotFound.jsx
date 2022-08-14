import React from 'react';

const NotFound = () => {
  return (
    <>
      <main
        className="min-h-full min-w-full bg-contain bg-no-repeat md:bg-cover bg-top sm:bg-top md:h-screen m-0"
        style={{
          backgroundImage: `url("/error404/404image.jpg")`,
        }}
      >
        <div className="min-h-full min-w-full bg-contain bg-top sm:bg-top md:h-screen m-0 bg-no-repeat md:bg-cover" style={{
          overflow: "hidden",
          // background: "black",
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          objectFit: "contain",
        }}>
          <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-sm font-semibold text-slate-50  uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-secondary tracking-tight sm:text-5xl">
              Uh oh! I think you’re lost.
            </h1>
            <p className="mt-2 text-lg font-medium text-slate-50">
              It looks like the page you’re looking for doesn't exist.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;

