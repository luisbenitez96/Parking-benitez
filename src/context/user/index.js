import { useContext } from "react";

import UserContext from "./context";
import { UserProvider } from "./provider";

export { UserProvider };
export default UserContext;


export function useUser() {
  const user = useContext(UserContext);



  return user;
}
