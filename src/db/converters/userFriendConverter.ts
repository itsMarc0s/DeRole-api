import { UserFriend } from "../../models/userFriend";

const userFriendConverter = {
    toFirestore: (userFriend : UserFriend) => {
        return {
            id: userFriend.id,
            user_id: userFriend.user_id,
            friend_id: userFriend.friend_id
        };
    },
    fromFirestore: (snapshot:any, options:any) => {
        const data = snapshot.data(options);
        return new UserFriend({
            id: data.id,
            user_id: data.user_id,
            friend_id: data.friend_id
        });
    }
};

export default userFriendConverter