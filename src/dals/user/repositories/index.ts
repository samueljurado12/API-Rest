import { envConstants } from "core/constants";
import { mockUserRepository } from "./user.modk-repository";
import { dbUserRepository } from "./user.db-repository";

export const userRepository = envConstants.isMock ? mockUserRepository : dbUserRepository;