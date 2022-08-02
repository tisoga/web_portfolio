import db from "../config/firebase"

const visitorCounter = (setErrorStatus) => {
    const docRef = db.collection('settings-data').doc('visitor-data')
    return db.runTransaction((transaction) => {
        return transaction.get(docRef).then((doc) => {
            if (!doc.exists) {
                throw new Error("Document does not exist!")
            }
            const newCounter = doc.data().totalVisitor + 1
            transaction.update(docRef, { totalVisitor: newCounter })
        }).then(() => {})
        .catch((error) => {
            console.log("Transaction failed: ", error);
            setErrorStatus(true)
        });
    })
}

export default visitorCounter