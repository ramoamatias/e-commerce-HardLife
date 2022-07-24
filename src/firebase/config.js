import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAemuPxC-AEjG11pvZzoTrzIp6Mv_rqTK8",
  authDomain: "hardlife-394b3.firebaseapp.com",
  projectId: "hardlife-394b3",
  storageBucket: "hardlife-394b3.appspot.com",
  messagingSenderId: "489882340483",
  appId: "1:489882340483:web:a8ba3bd66983b689b9dfb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function inicializarFirestore() {
    return app;
}