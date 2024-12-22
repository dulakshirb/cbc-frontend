import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClicked() {
    axios
      .post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        // check user valid or not
        if (res.data.user == null) {
          alert(res.data.message);
          return;
        }

        // get and store on cache jwt token
        localStorage.setItem("token", res.data.token);

        // redirect user to pages base on their type
        if (res.data.user.type == "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      });
  }

  return (
    <div className="w-full h-full flex justify-center items-center text-text">
      <div className="border p-5 rounded-lg">
        <div className="flex flex-col gap-1 mb-8">
          <span className="font-semibold text-3xl">Welcome back</span>
          <span className="font-light">Please enter your details</span>
        </div>
        <div className="flex flex-col gap-4 min-w-96">
          <div className="flex flex-col gap-2 min-w-96">
            <span>Email address</span>
            <input
              className="border rounded-sm p-2"
              type="text"
              defaultValue={email}
              placeholder="yourname@company.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2 min-w-96">
            <span>Password</span>
            <input
              className="border rounded-sm p-2"
              type="password"
              defaultValue={password}
              placeholder="******"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex justify-end text-sm underline mb-8 mt-1">
          <Link className="text-primary hover:text-primary-hover">
            Forget Password
          </Link>
        </div>
        <button
          className="w-full bg-primary text-white hover:bg-primary-hover p-3 rounded-lg"
          onClick={handleLoginClicked}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
