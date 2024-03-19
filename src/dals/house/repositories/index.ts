import { envConstants } from "core/constants"
import { houseMockRepository } from "./house.mock-repository"
import { houseDbRepository } from "./house.db-repository";

export const houseRepository = envConstants.isMock ? houseMockRepository : houseDbRepository;