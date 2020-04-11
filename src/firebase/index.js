// @flow
import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

import auth from "./auth";
import firestore from "./firestore";
import functions from "./functions";

import {firebaseConfig} from "./config"


const FruteandoFirebaseApp = (config) => {
  // Initialize Firebase App

  // If theres already an firebase app use that first
  if (typeof window === "undefined") return null;

  const app = firebase.apps.length
    ? firebase.apps[0]
    : firebase.initializeApp(config);

  const appAuth = app.auth();

  const appFunctions = app.functions();
  return {
    ...auth(appAuth),
    ...firestore(app.firestore(), appAuth),
    ...functions(appFunctions),
  };
};

const createFirebase = () => FruteandoFirebaseApp(firebaseConfig());

export default createFirebase;



