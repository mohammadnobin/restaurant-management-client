import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router";
const SocialLogIn = () => {
  const { googleSignIn } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const locaFrom = location.state || "/";
  const handleGoogleSignIng = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate(locaFrom);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button
      onClick={handleGoogleSignIng}
      className=" justify-center gap-x-2 mb-4 items-center text-white py-3 rounded-2xl px-10 cursor-pointer bg-orange w-full  flex text-xl "
    >
      <FcGoogle size={30} />
      <p className="text-xl ">Google Login</p>
    </button>
  );
};

export default SocialLogIn;
