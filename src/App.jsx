import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homePage";
import AdminHomePage from "./pages/admin/adminHomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
        />
        <Routes path="/*">
          <Route path="/*" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
