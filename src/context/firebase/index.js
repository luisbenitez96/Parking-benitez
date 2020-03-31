import { useContext } from "react";

import FirebaseContext from "./context";
import FirebaseProvider from "./provider";

export { FirebaseProvider };
export default FirebaseContext;

export function useFirebase() {
  const firebase = useContext(FirebaseContext);

  if (!firebase) {
    throw new Error("FirebaseContext must be used within a FirebaseProvider");
  }

  return firebase;
}
