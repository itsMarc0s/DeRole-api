import { CreateUserRequestBody } from "../../controllers/user/createUserController";
import { User } from "../../models/user";
import UserRepository from "../../repositories/userRepository";


const repository = new UserRepository()

export default class CreateUserService {

    public static async create(requestBody: CreateUserRequestBody): Promise<User> {
        //Should NOT create user with same ID
        if(await this.findById(requestBody.id)) {
            throw new Error("User already exists with this id")
        }

        //Password1 and Password2 Should have the same value
        if (!this.verifyPassword(requestBody.password1, requestBody.password2)) {
            throw new Error("Both passwords should match")
        }
        //Should NOT create user with password shorter than 8
        if (!this.verifyPasswordStrength(requestBody.password1)) {
            throw new Error("Too weak password")
        }

        //Properly Create the user
        const userToCreate = new User({ id: requestBody.id, email: requestBody.email, name: requestBody.name, password: requestBody.password1, profileImage: '', username: requestBody.username })
        return repository.create(userToCreate)
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