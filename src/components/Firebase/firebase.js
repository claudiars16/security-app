import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: "AIzaSyAlLg06Da1C5830nHcNbb8dEW6GSWsweX8",
  authDomain: "passgame.firebaseapp.com",
  databaseURL: "https://passgame.firebaseio.com",
  projectId: "passgame",
  storageBucket: "",
  messagingSenderId: "1045674352713",
  appId: "1:1045674352713:web:cd961c5110e245d9fd1f98"
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;