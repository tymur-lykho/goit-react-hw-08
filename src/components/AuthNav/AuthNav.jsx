import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to={"/login"}>Log In</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      {/* <h3>Hello, username</h3>
      <button type="button">Log Out</button> */}
    </div>
  );
}
