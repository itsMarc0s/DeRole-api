import db from "../firestoreDB";
import { collection, addDoc, getDoc, getDocs, query, where, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

class firestoreTestHelper{

    static async deleteCollection(collectionPath: string) {
        return (await getDocs(collection(db, collectionPath)))
        .docs.map((doc)=>{
            deleteDoc(doc.ref)
        })
    }
}

export default firestoreTestHelper