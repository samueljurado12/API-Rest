import { hashPassword } from "common/helpers";
import { User } from "../user.model";
import { UserRepository } from "./user.repository";
import { userContext } from "../user.context";

export const dbUserRepository: UserRepository = {
    getUserByEmailAndPassword: async (email: string, password: string): Promise<User> => {
        const user = await userContext.findOne({
            email,
        });

        const hashedPassword = await hashPassword(password, user?.salt);
        return user?.password === hashedPassword ? ({
            _id: user._id,
            email: user.email,
            role: user.role
        } as User) : null
    }
}