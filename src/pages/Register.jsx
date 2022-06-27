import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { volunteerRegister, reset } from '../features/volunteerauth/volunteerauthSlice';
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      name,
      email,
      password,
    };
    dispatch(volunteerRegister(volunteerData));
  };

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess) {
      toast.success('Please verify your email with the link sent to your email');
      navigate('/v/login');
    }

    dispatch(reset());
  },[isError,isSuccess,volunteer,message, navigate,dispatch] );

  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
        <div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">Volunteer <span className="text-secondary-focus">Registration</span></h1>
            <p className="py-6 text-2xl">Become a volunteer today!</p>
          </div>

          <div className="md:w-96 mx-auto w-80">
            <div className="card w-full min-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <section>
                  <form onSubmit={onSubmit}>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" id="name" name="name" value={name} onChange={onChange} placeholder="Enter your Full Name" className="input input-bordered" required />
                    </div>
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
                      <input type="password" id="password" name="password" minLength="8" value={password} onChange={onChange} placeholder="Enter Password" className="input input-bordered" required />
                      <label className="label">
                        <Link to="/o/register" className="label-text-alt link text-secondary-focus link-hover ">Register as an Organisation?</Link>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-secondary">Register</button>
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

export default Register;