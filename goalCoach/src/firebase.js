import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBTDEGY3DM0dQZudzpzv-_D58rkMLxe9Mw",
  authDomain: "goalco-ee56c.firebaseapp.com",
  databaseURL: "https://goalco-ee56c.firebaseio.com",
  projectId: "goalco-ee56c",
  storageBucket: "goalco-ee56c.appspot.com",
  messagingSenderId: "308153014460"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref("goals");
export const completeGoalRef = firebase.database().ref("completeGoals");
