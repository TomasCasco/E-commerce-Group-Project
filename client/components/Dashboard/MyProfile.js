import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function MyProfile() {
  const [{ username, email, id }, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(JSON.parse(Cookies.get("user")));
  }, []);

  return (
    <div>
      <h1>{username}</h1>
      <p>ID {id}</p>
      <p>email: {email}</p>
    </div>
  );
}
