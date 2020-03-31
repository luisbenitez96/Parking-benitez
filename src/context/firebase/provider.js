import React, { useState, useEffect, ReactNode } from "react";

import Context from "./context";
import createFirebaseApp from "../../firebase";

const Provider = ({ children }) => {
  const [firebase, setFirebase] = useState(null);

  useEffect(() => {
    setFirebase(createFirebaseApp());
  }, []);

  if (!firebase) return null;

  return <Context.Provider value={firebase}>{children}</Context.Provider>;
};

export default Provider;
