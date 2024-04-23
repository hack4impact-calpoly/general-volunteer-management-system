import Horizontal_Navbar_Component from "@components/horizontal_navbar";
import Vertical_Navbar_Component from "@components/vertical_navbar";

export default function Home() {
  return (
    <main>
      <h1>Volunteer Management System Home Page</h1>
      <Horizontal_Navbar_Component/>
      <Vertical_Navbar_Component/>
    </main>
  );
}
