import { RoleCategory } from "./roleCategory";

export type RoleType = {
    id : string,
    name: string, 
    description: string,
    promo_text: string,
    image: string,
    city: string,
    location: string,
    address: string,
    creator_id: string,
    boosted: boolean,
    categories: RoleCategory[]
}

export class Role implements RoleType{
    readonly id: string;
    readonly name: string; 
    readonly description: string;
    readonly promo_text: string;
    readonly image: string;
    readonly city: string;
    readonly location: string;
    readonly address: string;
    readonly creator_id: string;
    readonly boosted: boolean;
    readonly categories: RoleCategory[];

    constructor({id, name, description, promo_text, image, city, location, address, creator_id, boosted, categories} : RoleType){
        this.id = id
        this.name = name
        this.description = description
        this.promo_text = promo_text
        this.image = image
        this.city = city
        this.location = location
        this.address = address
        this.creator_id = creator_id
        this.boosted = boosted
        this.categories = categories
    }
}