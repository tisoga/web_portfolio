import firebase from 'firebase/app';
import 'firebase/firestore'

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

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
