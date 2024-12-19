import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import AdminHomePage from "./pages/adminHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin/*" element={AdminHomePage} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
