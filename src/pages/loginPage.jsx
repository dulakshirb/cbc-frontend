import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div className="container flex justify-center items-center w-full h-screen">
      <div className="w-[359px] h-[359px] border border-black relative flex flex-col items-center justify-center p-4">
        <img className="w-20 h-20 object-cover rounded-full mb-4" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" />
        <p className="text-black-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quae.
          Quaerat aliquam molestiae quos facere!
        </p>
        <button className="bg-red-500 mt-6 p-2 min-w-[120px] text-white rounded-lg">Login</button>
        <div className="w-10 h-10 bg-blue-600 absolute left-0 top-0 z-[100]"></div>
        <div className="w-36 h-36 bg-yellow-600 fixed right-0 bottom-0"></div>
      </div>
    </div>
  );
}
