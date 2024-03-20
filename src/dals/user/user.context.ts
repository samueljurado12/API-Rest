import { db } from "core/servers";
import { User } from ".";

export const getUserContext = () => db?.collection<User>('users');