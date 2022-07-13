import { User } from "../../models/user";
import UserRepository from "../../repositories/userRepository";

export type UpdateUserRequestBody = {
    name?: string,
    username?: string,
    email?: string,
    profileImage?: string,
}

const repository = new UserRepository()

export default class UpdateUserService {

    public static async update(id:string, requestBody: UpdateUserRequestBody): Promise<User> {
        //Verify if user exists
        if(!await this.findById(id)) {
            throw new Error("There's no user to edit with the specified id")
        }
        
        return await repository.update(id, requestBody)
    }

    public static async changePassword(password1: string, password2: string){
        //Password1 and Password2 Should have the same value
        if (!this.verifyPassword(password1, password2)) {
            throw new Error("Both passwords should match")
        }
        //Should NOT create user with password shorter than 8
        if (!this.verifyPasswordStrength(password1)) {
            throw new Error("Too weak password")
        }
    }

    private static async findById(id: string) {
        return await repository.findById(id)
    }

    private static verifyPassword(password1: string, password2: string) {
        return password1 == password2
    }

    private static verifyPasswordStrength(password: string) {
        return password.length > 7
    }
}