import { useState } from "react";
import Menu from "../../components/admin/Menu";
import Login from "../../components/admin/Login";

export default function Admin(props) {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <>{isLoggedIn ? <Menu /> : <Login />}</>;
}

export function getServerSideProps() {
  const isAdmin = true;

  return {
    props: { isAdmin }
  };
}
