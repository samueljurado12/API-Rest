import { User } from "../user.model";
import { UserRepository } from "./user.repository";

export const dbUserRepository: UserRepository = {
    getUserByEmailAndPassword: async (email: string, password: string): Promise<User> => {
        throw new Error("Function not implemented.");
    }
}