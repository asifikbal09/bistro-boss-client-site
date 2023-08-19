import { useContext} from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const {createUser} = useContext(AuthContext);


//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     createUser(email, password)
//     .then((result) =>{
//         const user = result.user
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })
//     form.reset()
//   };

// react hook form using for create user
const onSubmit = data => {
    createUser(data.email, data.password)
    .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
    })
};


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {required:true})}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name?.type === 'required' && <p className="text-red-600">Name is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email", {require:true})}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === 'required' && <p className="text-red-600">Email is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { 
                    required: true, 
                    maxLength: 20,
                    minLength:6,
                    pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/
                })}
                  
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase one lowercase one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p>Already have an account?<Link to='/login'>Sign In</Link></p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;