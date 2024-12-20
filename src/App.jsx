import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homePage";
import AdminHomePage from "./pages/admin/adminHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/*" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminHomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
