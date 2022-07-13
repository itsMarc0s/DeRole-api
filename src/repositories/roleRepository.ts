import { Role, RoleType } from "../models/role";

export default class RoleRepository {

    private roles: RoleType[]

    constructor() {
        this.roles = [];
    }

    public async create(role: RoleType) {
        const roleCreated = new Role(role)
        this.roles.push(roleCreated)
        return roleCreated
    }

    public async findById(id: string) {
        return this.roles.find(role=>role.id === id)
    }

    public async delete(id: string){
        const roleFound = await this.findById(id)
        return roleFound ?
            this.roles.splice(this.roles.indexOf(roleFound), 1)[0]
            : null
    }
}