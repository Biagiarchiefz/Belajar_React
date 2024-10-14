import { Link } from "react-router-dom";

const AuthLayouts = (probs) => {
  const { children, title, type } = probs;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, Please enter your details
        </p>

        {children}

        {/* value type dibawah ini di ambil dari probs */}
        {/* {Navigation({ type })} */}
        <Navigation type={type} />

      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="font-semibold text-sm mt-3 text-center">
        Don't have an account
        <Link to="/register" className="text-blue-600 font-bold">
          {""} sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="font-semibold text-sm mt-3 text-center">
        Have an account ?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
