import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj-KnprWjBCR8Vet5vDwNz8JsubAMqOAY",
  authDomain: "https://explorebosnia-2d06d-default-rtdb.firebaseio.com/",
  projectId: "explorebosnia-2d06d",
  storageBucket: "explorebosnia-2d06d.appspot.com",
  messagingSenderId: "229619254663",
  appId: "1:229619254663:web:2ef9e3b5f52eac801c3f22",
  measurementId: "G-F1N3RWVH8R"
};

const app = initializeApp(firebaseConfig);

export default app;
