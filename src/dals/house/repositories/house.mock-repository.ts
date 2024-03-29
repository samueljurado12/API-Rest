import { HouseRepository } from "./house.repository";
import { House, Review } from "..";
import { db } from "../../mock-data";
import { ObjectId } from "mongodb";

const paginatedResult = <T>(list: T[], page: number, pageSize: number): T[] => {
    let paginatedResult = [...list];
    if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedResult.length);
        paginatedResult = paginatedResult.slice(startIndex, endIndex);
    }
    return paginatedResult;
}

export const houseMockRepository: HouseRepository = {
    getHouseList: async (page?: number, pageSize?: number, country?: string): Promise<House[]> => paginatedResult(db.houses, page, pageSize),
    getHouseListByCountry: async (country: string, page?: number, pageSize?: number): Promise<House[]> => paginatedResult(db.houses.filter(h => h.address.country === country || h.address.country_code === country), page, pageSize),
    getHouse: async (id: string): Promise<House> => db.houses.find(h => h._id === id),
    reviewHouse: async (id: string, review: Review): Promise<Review> => {
        review = { ...review, _id: new ObjectId().toHexString(), date: new Date(), listing_id: id };
        db.houses.find(h => h._id === id).reviews.push(review);
        return review;
    },
    updateHouse: async (house: House): Promise<House> => {
        throw new Error("Function not implemented.");
    }
}