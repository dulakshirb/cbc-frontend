import { Link } from "react-router-dom";
import "./loginPage.css";
export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="enail" />
      <input type="password" placeholder="password" />
      <Link to="/">Login</Link>
    </div>
  );
}
