import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Firebase/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(from)

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        axios.post("http://localhost:5000/users", saveUser).then((res) => {
          console.log(res);
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full text-center mb-4">
      <div className="divider"></div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
