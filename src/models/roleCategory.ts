export type RoleCategoryType = {
    id: string,
    name: string,
    description: string,
}

export class RoleCategory implements RoleCategoryType {
    readonly id: string
    readonly name: string
    readonly description: string

    constructor({ id, name, description }: RoleCategoryType) {
        this.id = id;
        this.name = name
        this.description = description
    }

}