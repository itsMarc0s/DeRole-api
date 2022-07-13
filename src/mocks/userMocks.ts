import {faker} from '@faker-js/faker'

import { User, UserType } from '../models/user'

type CustomUserMockType = {
    id?: string | null,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    password?: string | null,
    profileImage?: string | null
}

export default class UserMocks{

    public static generateCleanUser(){
        return new User({
            id: faker.random.alphaNumeric(5),
            name: faker.name.findName('marcos'),
            username: faker.name.findName('marcos'),
            email: faker.internet.email('jeane', 'joshn'),
            password: faker.random.alphaNumeric(8),
            profileImage: faker.image.imageUrl()
        })
    }

    public static generateShortPasswordUser(){
        return new User({
            id: faker.random.alphaNumeric(5),
            name: faker.name.findName('kevin'),
            username: faker.name.findName('kevin'),
            email: faker.internet.email('jeane', 'joshn'),
            password: faker.random.alphaNumeric(7),
            profileImage: faker.image.imageUrl()
        })
    }

    public static generateCustomUser({ id, name, username, email, password, profileImage } : CustomUserMockType){
        return new User({
            id: id || faker.random.alphaNumeric(5),
            name: name || faker.name.findName('kevin'),
            username: username || faker.name.findName('kevin'),
            email: email || faker.internet.email('jeane', 'joshn'),
            password: password || faker.random.alphaNumeric(7),
            profileImage: profileImage || faker.image.imageUrl()
        })
    }


}