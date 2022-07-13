import { faker } from "@faker-js/faker";
import { Role } from "../models/role";

export default class RoleMocks{
   
    static generateCleanRole(){
        return new Role({
            id: faker.random.alphaNumeric(10),
            name: faker.animal.dog()+' fest',
            description: faker.commerce.productDescription(),
            address: faker.address.streetAddress(),
            boosted: (Math.random() === 0),
            categories: [],
            city: faker.address.city(),
            image: faker.image.imageUrl(),
            location: faker.address.county(),
            promo_text: faker.commerce.productDescription(),
            creator_id: faker.random.alphaNumeric(10)
        })
    }
}