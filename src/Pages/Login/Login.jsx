import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../component/SocialLogin/SocialLogin";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  const {login} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";

  const handleValidateCaptcha = () => {
    const user_validate_captcha = captchaRef.current.value;
    console.log(user_validate_captcha);
    if (validateCaptcha(user_validate_captcha)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then((result) =>{
        const user = result.user
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully logged in ',
            showConfirmButton: false,
            timer: 2000
          })
          navigate(from, { replace: true });
    })
    .catch((error) => {
        console.log(error.message)
    })
    form.reset()
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  placeholder="Enter the chapcha above"
                  className="input input-bordered"
                />
              </div>
              <p>New to Bistro Boss?<Link to='/signup'>Create account</Link></p>
              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
