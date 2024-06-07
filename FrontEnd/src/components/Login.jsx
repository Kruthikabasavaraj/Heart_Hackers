import { useState } from "react";
import { Route, useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState("");

  const navigate = useNavigate();
  //   const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  async function handleLogin(e) {
    e.preventDefault();
    let user;

    try {
      const res = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      const user = data.data.user;

      console.log(user);

      if (user.role === "user") {
        navigate(`/user/${user._id}`);
        return;
      }

      navigate("/listen");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <label className="sr-only">Email address</label>
            <input
              type="email"
              required
              id="email"
              onChange={(e) => handleChange(e)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />

            <label className="sr-only">Password</label>
            <input
              type="password"
              required
              id="password"
              onChange={(e) => handleChange(e)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/signup">
              <button className="btn btn-primary">
                No account? Signup here 👈
              </button>
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
