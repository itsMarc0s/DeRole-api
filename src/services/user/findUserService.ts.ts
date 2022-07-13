import { User } from "../../models/user";
import UserRepository from "../../repositories/userRepository";

const repository = new UserRepository()

export default class FindUserService {

    static async findById(id: string) {
        return await repository.findById(id)
    }
}