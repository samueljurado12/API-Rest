import { envConstants } from "core/constants";
import { mockUserRepository } from "./user.mock-repository";
import { dbUserRepository } from "./user.db-repository";

export const userRepository = envConstants.isMock ? mockUserRepository : dbUserRepository;