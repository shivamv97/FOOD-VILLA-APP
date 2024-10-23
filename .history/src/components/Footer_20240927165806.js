import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return(
  <h2>Footer</h2>
  <h3 className="text-green-600">{user.name}</h3>
  );
};

export default Footer;
