import { User, UserType } from "../models/user"
import { collection, addDoc, getDoc, getDocs, query, where, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import db from "../db/firestoreDB";
import userConverter from "../db/converters/userConverter";
import { UserNotFoundError } from "../errors/userFriendErrors";

export type UserUpdateType = {
    name?: string,
    username?: string,
    email?: string,
    password?: string,
    profileImage?: string,
}

export default class UserRepository {

    public async create(user: User) {
        try {
            await setDoc(doc(db, "users", user.id), JSON.parse(JSON.stringify(user)))
            return user
        } catch (e) {
            throw new Error("User wasnt created")
        }
    }

    public async findById(id: string) {
        const ref = doc(db, "users", id).withConverter(userConverter);
        const docSnap = await getDoc(ref);
        if (!docSnap.exists()) {
            throw new UserNotFoundError({
                message: "Cant find user with this id",
                statusCode: 200,
                name: 'UserNotFound'
            })
        }
        return docSnap.data()
    }

    public async findMultipleById(ids: string[]) {

    }

    public async update(id: string, updatedProps: UserUpdateType) {
        try {
            const userRef = doc(db, "users", id);
            await updateDoc(userRef, { ...updatedProps })
            return await this.findById(id)
        } catch (e) {
            throw new Error("Error Updating user: " + e)
        }
    }

    public async delete(id: string) {
        try {
            await deleteDoc(doc(db, "users", id))
            return true
        } catch (e) {
            return false
        }
    }
}