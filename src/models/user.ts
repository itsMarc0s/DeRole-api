export type UserType = {
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    profileImage: string,
}

export class User implements UserType{
    readonly id: string;
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly profileImage: string;

    constructor(user:UserType){
        this.id = user.id;
        this.name = user.name;
        this.password = user.password;
        this.profileImage = user.profileImage;
        this.username = user.username;
        this.email = user.email;
    }

}