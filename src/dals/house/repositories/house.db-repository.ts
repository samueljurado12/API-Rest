import { House, Review } from "..";
import { getHouseContext } from "../house.context";
import { HouseRepository } from "./house.repository";

export const houseDbRepository: HouseRepository = {
    getHouseList: async (page?: number, pageSize?: number): Promise<House[]> => {
        const skip = (page - 1) * pageSize;
        const limit = pageSize ?? 0
        return getHouseContext().find().skip(skip).limit(limit).toArray();
    },
    getHouseListByCountry: async (country: string, page?: number, pageSize?: number): Promise<House[]> => {
        const skip = (page - 1) * pageSize;
        const limit = pageSize ?? 0
        return getHouseContext().find({
            $or: [
                { 'address.country': country },
                { 'address.country_code': country }
            ]
        })
            .skip(skip).limit(limit).toArray();
    },
    getHouse: function (id: string): Promise<House> {
        return getHouseContext().findOne({ _id: id })
    },
    reviewHouse: function (id: string, review: Review): Promise<Review> {
        throw new Error("Function not implemented.");
    }
}