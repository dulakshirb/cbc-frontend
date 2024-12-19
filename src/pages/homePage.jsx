import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "../components/navBar";
import ProductsPage from "./home/productsPage";
import LoginPage from "./loginPage";
import ContactPage from "./home/contactPage";
import SignUpPage from "./signUpPage";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="h-[calc(100vh-130px)] flex justify-center items-center">
        <Routes path="/*">
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
