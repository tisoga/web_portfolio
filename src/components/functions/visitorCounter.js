import { doc, getDoc, runTransaction } from 'firebase/firestore';
import db from "../config/firebase"

const visitorCounter = () => {
    const docRef = doc(db, 'settings-data', 'visitor-data');
    return runTransaction(db, (transaction) => {
        return getDoc(docRef).then((doc) => {
            if (!doc.exists()) {
                throw new Error("Document does not exist!");
            }
            const newCounter = doc.data().totalVisitor + 1;
            transaction.update(docRef, { totalVisitor: newCounter });
        }).then(() => {})
        .catch((error) => {
            console.log("Transaction failed: ", error);
            // setErrorStatus(true);
        });
    });
};

export default visitorCounter