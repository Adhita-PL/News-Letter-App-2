import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBBt65IbpSXEb4-FwC8zwg1WOlue2-eCjQ",
    authDomain: "news-letter-app-e4e49.firebaseapp.com",
    databaseURL: "https://news-letter-app-e4e49-default-rtdb.firebaseio.com",
    projectId: "news-letter-app-e4e49",
    storageBucket: "news-letter-app-e4e49.appspot.com",
    messagingSenderId: "378278223627",
    appId: "1:378278223627:web:e352b1045af76f1a194c0e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();