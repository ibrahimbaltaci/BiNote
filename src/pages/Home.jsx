import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";
import Navbar from "../components/navbar";

function Home() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  Navbar;

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <h1>Home</h1>
      {isLoggedIn ? (
        <>
          <p>Welcome! You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to access more features.</p>
      )}
    </div>
  );
}

export default Home;
