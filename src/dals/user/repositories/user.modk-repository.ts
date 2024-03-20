import { db } from "dals/mock-data";
import { User } from "../user.model";
import { UserRepository } from "./user.repository";

export const mockUserRepository: UserRepository = {
    getUserByEmailAndPassword: async (email: string, password: string): Promise<User> => db.users.find(u => u.email === email && u.password === password)
}