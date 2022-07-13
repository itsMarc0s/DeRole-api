import { collection, addDoc, getDoc, getDocs, query, where, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import db from "../db/firestoreDB";
import { UserFriend, UserFriendType } from "../models/userFriend";
import userFriendConverter from "../db/converters/userFriendConverter";

export default class UserFriendRepository {

    public async create(userFriend: UserFriend) {
        await setDoc(doc(db, "user-friends", userFriend.id).withConverter(userFriendConverter), userFriend)
        return userFriend
    }

    public async findById(id: string) {
        const ref = doc(db, "user-friends", id).withConverter(userFriendConverter);
        const docSnap = await getDoc(ref);
        if(!docSnap.exists()){
            throw new Error('Could not find user friend with this id')
        }
        return docSnap.data()
    }

    public async findAllByUserId(userId: string){
        const q = query(collection(db, "user-friends"), where("user_id", "==", userId)).withConverter(userFriendConverter)
        const querySnapshot = await getDocs(q);

        const usersFriendsFound : UserFriend[] = []

        querySnapshot.forEach((doc) => {
            usersFriendsFound.push(doc.data())
        });

        return usersFriendsFound
    }

    public async delete(id: string) {
        await deleteDoc(doc(db, "user-friends", id))
        return true
    }
}