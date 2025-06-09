import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink to={"/login"}>Log In</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
    </div>
  );
}
