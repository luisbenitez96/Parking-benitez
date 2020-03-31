import { createContext } from "react";

export const initState = {
  status: "loggedOut",
  fullname: "",
  email: "",
  phone: "",
};

const UserContext = createContext([initState, {}]);

export default UserContext;
