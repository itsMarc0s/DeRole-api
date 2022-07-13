import { User } from "../../models/user";

const userConverter = {
    toFirestore: (user : User) => {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            password: user.password,
            profileImage: user.profileImage,
            username: user.username
        };
    },
    fromFirestore: (snapshot:any, options:any) => {
        const data = snapshot.data(options);
        return new User({
            id: data.id,
            email: data.email,
            name: data.name,
            password: data.password,
            profileImage: data.profileImage,
            username: data.username
        });
    }
};

export default userConverter