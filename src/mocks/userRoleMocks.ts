import { faker } from "@faker-js/faker";
import { UserRole } from "../models/userRole";

export default class UserRoleMocks{

    static generateCleanUserRole(){
        return new UserRole({
            id: faker.random.alphaNumeric(10),
            user_id: faker.random.alphaNumeric(10),
            role_id: faker.random.alphaNumeric(10)
        })
    }
}