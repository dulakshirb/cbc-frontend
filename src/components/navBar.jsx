import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-blue-400 flex justify-between items-center p-4 h-[90px]">
      <div className="text-4xl text-blue-800 font-bold font-mono">CBC</div>
      <div className="flex items-center gap-5 text-white">
        <Link to="/" >Home</Link>
        <Link to='/products'>Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/login'>Login</Link>
        <Link className="bg-white text-blue-400 p-2 rounded-lg" to='/signup'>Get Started</Link>
      </div>
    </div>
  );
}
