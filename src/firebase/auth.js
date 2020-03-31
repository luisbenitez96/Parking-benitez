// @flow

const firebaseAuth = auth => ({
    auth,
    login: ({ email, password }) => {
        // Login
        return auth.signInWithEmailAndPassword(email, password)
    },
    logout: () => {
        return auth.signOut()
    },
})

export default firebaseAuth
