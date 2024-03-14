import { envConstants } from "core/constants"
import { houseMockRepository } from "./house.mock-repository"

export const houseRepository = envConstants.isMock ? houseMockRepository : null;