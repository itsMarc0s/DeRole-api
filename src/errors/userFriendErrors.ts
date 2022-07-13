export class UserNotFoundError extends Error{
    readonly statusCode : number

    constructor(userNotFoundError: UserNotFoundError){
        super(userNotFoundError.message)
        this.statusCode = userNotFoundError.statusCode
    }

}