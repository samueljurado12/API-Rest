import { House, Review } from "..";
import { HouseRepository } from "./house.repository";

export const houseDbRepository: HouseRepository = {
    getHouseList: function (page?: number, pageSize?: number): Promise<House[]> {
        throw new Error("Function not implemented.");
    },
    getHouseListByCountry: function (country: string, page?: number, pageSize?: number): Promise<House[]> {
        throw new Error("Function not implemented.");
    },
    getHouse: function (id: string): Promise<House> {
        throw new Error("Function not implemented.");
    },
    reviewHouse: function (id: string, review: Review): Promise<Review> {
        throw new Error("Function not implemented.");
    }
}