export type UserRoleType = {
    id: string,
    user_id: string,
    role_id: string
}

export class UserRole implements UserRoleType{

    readonly id: string
    readonly user_id: string
    readonly role_id: string

    constructor(userRole: UserRoleType){
        this.id = userRole.id
        this.user_id = userRole.user_id
        this.role_id = userRole.role_id
    }
}