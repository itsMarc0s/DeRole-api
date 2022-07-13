export type UserFriendType = {
    id: string,
    user_id: string,
    friend_id: string
}

export class UserFriend implements UserFriendType {

    readonly id: string
    readonly user_id: string
    readonly friend_id: string

    constructor(userFriend: UserFriendType){
        this.id = userFriend.id
        this.user_id = userFriend.user_id
        this.friend_id = userFriend.friend_id
    }
}