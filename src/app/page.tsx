import Navbar from "@components/Navbar";
import Login from "../app/pages/authentication/login/page"

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <h1>Volunteer Management System Home Page</h1>
      <Login></Login>
    </main>
  );
}
