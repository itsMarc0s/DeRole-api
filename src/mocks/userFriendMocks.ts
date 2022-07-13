import {faker} from '@faker-js/faker'
import { UserFriend, UserFriendType } from '../models/userFriend'

export default class UserFriendMocks{
    public static generateCleanUserFriend(){
        return new UserFriend({
            id: faker.random.alphaNumeric(10),
            user_id: faker.random.alphaNumeric(10),
            friend_id: faker.random.alphaNumeric(10)
        })
    }
}