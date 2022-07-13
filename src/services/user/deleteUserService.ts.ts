import { User } from "../../models/user";
import UserRepository from "../../repositories/userRepository";

const repository = new UserRepository()

export default class DeleteUserService {

    static async deleteById(id: string) {
        return await repository.delete(id)
    }
}