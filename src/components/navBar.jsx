import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-secondary flex justify-between items-center p-4 h-[90px]">
      <img className="w-10" src="/logo.webp" alt="" />
      <div className="flex items-center gap-4 text-text">
        <Link to="/" >Home</Link>
        <Link to='/products'>Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/login'>Login</Link>
        <Link className="bg-primary text-white uppercase text-sm font-semibold p-2 rounded-lg" to='/signup'>Get Started</Link>
      </div>
    </div>
  );
}
