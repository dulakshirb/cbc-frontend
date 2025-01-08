import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setalternativeNames] = useState("");
  const [imageUrls, setimageUrls] = useState("");
  const [price, setprice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");
    const imgUrls = imageUrls.split(",");

    const product = {
      productId: productId,
      productName: productName,
      altNames: altNames,
      images: imgUrls,
      price: price,
      lastPrice: lastPrice,
      description: description,
      stock: stock,
    };

    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:3000/api/products", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/products");
      toast.success("Product added successfully");
    } catch (err) {
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add Products
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product ID
            </label>
            <input
              type="text"
              value={productId}
              onChange={(e) => {
                setProductId(e.target.value);
              }}
              placeholder="Enter Product ID"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              placeholder="Enter Product Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Alternative Names
            </label>
            <input
              type="text"
              value={alternativeNames}
              onChange={(e) => {
                setalternativeNames(e.target.value);
              }}
              placeholder="Enter Alternative Names (comma-sepparated)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image URLs
            </label>
            <input
              type="text"
              value={imageUrls}
              onChange={(e) => {
                setimageUrls(e.target.value);
              }}
              placeholder="Enter Image URLs (comma-sepparated)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
              placeholder="Enter Price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Price
            </label>
            <input
              type="number"
              value={lastPrice}
              onChange={(e) => {
                setLastPrice(e.target.value);
              }}
              placeholder="Enter Last Price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Stock
            </label>
            <input
              type="number"
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
              placeholder="Enter Stock Quantity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Enter Product Description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
