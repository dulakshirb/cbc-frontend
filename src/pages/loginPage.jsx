import { Link } from "react-router-dom";

export default function LoginPage() {
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
            <input className="border rounded-sm p-2" type="text" />
          </div>
          <div className="flex flex-col gap-2 min-w-96">
            <span>Password</span>
            <input className="border rounded-sm p-2" type="password" />
          </div>
        </div>
        <div className="flex justify-end text-sm underline mb-8 mt-1">
          <Link className="text-primary hover:text-primary-hover">Forget Password</Link>
        </div>
        <button className="w-full bg-primary text-white hover:bg-primary-hover p-3 rounded-lg">Sign in</button>
      </div>
    </div>
  );
}