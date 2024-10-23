import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Shivam Verma",
    email: "shivamkv97@gmail.com",
  },
});

export default UserContext;
