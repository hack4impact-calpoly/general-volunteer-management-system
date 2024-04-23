import Navbar from "@components/Navbar";
import Vertical_Navbar_Component from "@components/vertical_navbar";
import Confirm_Reset_Component from "./pages/authentication/password/confirm-reset/page";

export default function Home() {
  return (
    <main>
      <h1>Volunteer Management System Home Page</h1>
      <Confirm_Reset_Component></Confirm_Reset_Component>
      <Vertical_Navbar_Component />
    </main>
  );
}
