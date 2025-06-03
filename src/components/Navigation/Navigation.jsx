import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  return (
    <div className={css.navList}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/contacts"}>Contacts</NavLink>
    </div>
  );
}
