import firebase from '@firebase/app'

const firebaseFirestore = (firestore, auth) => ({
  //ACA METE LAS CONSULTAS
  userData: uid => {
    return firestore.doc("users/" + uid);
  },
})

export default firebaseFirestore
