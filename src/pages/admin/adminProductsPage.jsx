import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen relative">
      <Link to={"/admin/products/add-product"} className="absolute right-8 bottom-8 text-4xl text-primary" title="Edit">
        <FaPlusSquare />
      </Link>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Products
      </h1>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3">Product ID</th>
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Last Price</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4">{product.productId}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {product.productName}
                </td>
                <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4">${product.lastPrice.toFixed(2)}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4 truncate max-w-sm">
                  {product.description}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="text-red-500 hover:text-red-700 mx-2"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700 mx-2"
                    title="Edit"
                  >
                    <FaPencil />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
