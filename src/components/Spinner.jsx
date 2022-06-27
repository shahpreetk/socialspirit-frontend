const Spinner = () => {
  return (
    <>
      <div className="hero h-96 bg-base-100">
        <div className="hero-content">
          <div className="max-w-md">
            <progress className="progress w-56"></progress>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;