import { collection, addDoc, getDoc, getDocs, query, where, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { UserRole, UserRoleType } from "../models/userRole";
import db from "../db/firestoreDB";
import userRoleConverter from "../db/converters/userRoleConverter";

export default class UserRoleRepository{

    async create(userRole: UserRole){
        try{
            await setDoc(doc(db, "user-roles", userRole.id), JSON.parse(JSON.stringify(userRole)))
            return userRole
        }catch(e){
            throw new Error('User role could not be created')
        }
    }

    async findById(id: string){
        const ref = doc(db, "user-roles", id).withConverter(userRoleConverter);
        const docSnap = await getDoc(ref);
        if(!docSnap.exists()){
            throw new Error('Could not find user role with this id')
        }
        return docSnap.data()
    }

    async delete(id: string){
            await deleteDoc(doc(db, "user-roles", id))
            return true
    }
}