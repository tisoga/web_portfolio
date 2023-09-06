// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

import {
    firebaseApiKey,
    firebaseAppId,
    firebaseAuthDomain,
    firebaseMessagingSenderId,
    firebaseProjectId,
    firebaseStorageBucket
} from "./base";

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    projectId: firebaseProjectId,
    storageBucket: firebaseStorageBucket,
    messagingSenderId: firebaseMessagingSenderId,
    appId: firebaseAppId
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
