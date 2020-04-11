import firebase from '@firebase/app'

const firebaseFirestore = (firestore, auth) => ({
  //ACA METE LAS CONSULTAS

  tarifaData: uid => {
    return firestore.doc("Tarifa/" + uid);
  },

  balanceData: uid => {
    return firestore.doc("Balance/" + uid);
  },

  vehiculoData: uid => {
    return firestore.doc("Vehiculo/" + uid);
  },

  usuarioData: uid => {
    return firestore.doc("usuario/" + uid);
  },
})

export default firebaseFirestore
