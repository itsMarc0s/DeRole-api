import { UserRole } from "../../models/userRole";

const userRoleConverter = {
    toFirestore: (userRole : UserRole) => {
        return {
            id: userRole.id,
            role_id: userRole.role_id,
            user_id: userRole.user_id
        };
    },
    fromFirestore: (snapshot:any, options:any) => {
        const data = snapshot.data(options);
        return new UserRole({
            id: data.id,
            role_id: data.role_id,
            user_id: data.user_id
        });
    }
};

export default userRoleConverter