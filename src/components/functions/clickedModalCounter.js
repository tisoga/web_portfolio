import db from "../config/firebase"

const clickedModalCounter = (id) => {
    const docRef = db.collection('portfolio-data').doc(id)
    db.runTransaction((transaction) => {
        return transaction.get(docRef).then((doc) => {
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