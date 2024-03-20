import { Role } from "common-app";
import { ObjectId } from "mongodb";



export interface User {
    _id: ObjectId;
    email: string;
    password: string;
    salt: string;
    role: Role;
}