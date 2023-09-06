import { doc, getDoc, runTransaction } from 'firebase/firestore';
import db from "../config/firebase"

const clickedModalCounter = (id) => {
    // const docRef = db.collection('portfolio-data').doc(id)
    const docRef = doc(db, 'portfolio-data', id);
    return runTransaction(db, (transaction) => {
        return getDoc(docRef).then((doc) => {
            if (!doc.exists) {
                throw new Error("Document does not exist!")
            }

            const newCounter = doc.data().clicked + 1
            transaction.update(docRef, { clicked: newCounter })
        }).then(() => {})
        .catch((error) => {
            console.log("Transaction failed: ", error);
        });
    })
}

export default clickedModalCounter