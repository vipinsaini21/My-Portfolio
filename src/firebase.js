import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDnFHOFJVALk20CTIMBglssZiqQzwKQsAs",
	authDomain: "portfolio-vipin-saini.firebaseapp.com",
	projectId: "portfolio-vipin-saini",
	storageBucket: "portfolio-vipin-saini.appspot.com",
	messagingSenderId: "729462809330",
	appId: "1:729462809330:web:828ba5491e3fa4f16fe66b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
