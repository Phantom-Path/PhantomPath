import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkAffiM30sGBZjz87CS7EcS7fS43kGAJ0",
  authDomain: "phantompath-330cc.firebaseapp.com",
  projectId: "phantompath-330cc",
  storageBucket: "phantompath-330cc.appspot.com",
  messagingSenderId: "168126105367",
  appId: "1:168126105367:web:5b3401ca04d6891e645952",
  measurementId: "G-C67ZDG901B",
};

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    //keep
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  };

  checkAuth = () => {
    //adjust
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    //keep
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user, //adjust?
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message; //confirm if this is firebase default id
    const createdAt = new Date(timestamp);

    return {
      _id, //confirm if this is firebase default id
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid; //make sure current user is the same / make sure uid is the same
  }
}

export default new Fire();
