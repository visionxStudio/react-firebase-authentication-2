import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAUpt_4gXnRxY_x_AoysdR-owxAVx6taTU",
    authDomain: "macro-truck-241201.firebaseapp.com",
    databaseURL: "https://macro-truck-241201.firebaseio.com",
    projectId: "macro-truck-241201",
    storageBucket: "macro-truck-241201.appspot.com",
    messagingSenderId: "379764447029",
    appId: "1:379764447029:web:860ef69ed8ecf98e65de7c",
    measurementId: "G-1MJQ3TQXZS"
  };

class Firebase {
constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
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
}

export default Firebase;



/* 
    SIDE NOTE: 
        Optionally, you can create a second Firebase project on the Firebase website to have one project for your development environment and one project for your production environment. That way, you never mix data in the Firebase database in development mode with data from your deployed application (production mode). If you decide to create projects for both environments, use the two configuration objects in your Firebase setup and decide which one you take depending on the development/production environment:
*/