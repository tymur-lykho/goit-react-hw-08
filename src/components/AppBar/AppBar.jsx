import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

export default function AppBar() {
  return (
    <header>
      <Navigation />
      <AuthNav />
      {/* <UserMenu /> */}
    </header>
  );
}
