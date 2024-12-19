import { Link, Route, Routes } from "react-router-dom";

import { BsBox, BsGraphUp, BsPeople, BsCartCheck } from "react-icons/bs";
import AdminProductsPage from "./adminProductsPage";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      <div className="bg-blue-400 w-[20%] h-screen p-4 flex flex-col gap-4">
        <img
          className="w-20 h-20 object-cover rounded-full mb-4"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile-pic"
        />
        <Link
          className="flex items-center gap-2 text-white hover:text-slate-100"
          to="/admin"
        >
          <BsGraphUp />
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-2 text-white hover:text-slate-100"
          to="/admin/products"
        >
          {" "}
          <BsBox />
          Products
        </Link>
        <Link
          className="flex items-center gap-2 text-white hover:text-slate-100"
          to="/admin/orders"
        >
          <BsCartCheck />
          Orders
        </Link>
        <Link
          className="flex items-center gap-2 text-white hover:text-slate-100"
          to="/admin/customers"
        >
          <BsPeople />
          Customers
        </Link>
      </div>
      <div className="bg-blue-600 w-[80%] h-screen flex justify-center items-center">
        <Routes path="/*">
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProductsPage />} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
