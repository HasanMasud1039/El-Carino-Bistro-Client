import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import image from '../../assets/icon/aa.jpg'

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const saveUser = { name: data.name, email: data.email }
        fetch('https://bistro-boss-server-sage.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, { replace: true });
            }
          })

        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        console.log("User Profile Updated")
        reset();


      })
      .catch(error => {
        console.log(error.message);
        // alert(error.message);
        Swal.fire({
          title: 'SignUp Failed!',
          text: 'Email already In Use',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      })
  };

  return (
    <div className="bg-gradient-to-b from-cyan-100 to-lime-100 w-full">
      <Helmet>
        <title>el Cariño Bistro | Sign Up</title>
      </Helmet>
      <h1 className="text-5xl text-center pt-4 font-bold">Sign Up!</h1>
      <div className="hero p-8 min-h-screen ">
        <div className="hero-content w-[90%] flex-col lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left">
            <img className=" mt-[-140px] ms-8 rounded-lg h-[100%]" src={image} alt="" />
          </div> */}
          <div className="card flex-shrink-0 w-full text-lg max-w-lg shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[95%]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600 my-2">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600 my-2">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SignUp" />
              </div>
              <p>Already have an account?<span className="text-blue-600"> <Link to="/login">Login</Link></span></p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignUp;