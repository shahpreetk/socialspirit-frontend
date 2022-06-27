import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { volunteerLogin } from '../features/volunteerauth/volunteerauthSlice';

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const { volunteer, isLoading, isSuccess, isError, message } = useSelector((state) => state.volunteerauth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const volunteerData = {
      email,
      password,
    };
    dispatch(volunteerLogin(volunteerData));
  };

  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
        <div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">Volunteer <span className="text-primary-focus">Login</span></h1>
            <p className="py-6 text-2xl">Access your volunteer profile</p>
          </div>

          <div className="md:w-96 mx-auto w-80">
            <div className="card w-full min-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <section>
                  <form onSubmit={onSubmit}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" id="email" name="email" value={email} onChange={onChange} placeholder="Enter your Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" id="password" name="password" value={password} onChange={onChange} placeholder="Enter Password" className="input input-bordered" required />
                      <label className="label">
                        <Link to="/o/login" className="label-text-alt link link-hover mt-2 text-primary-focus">Login as an Organisation?</Link>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;