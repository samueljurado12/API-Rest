import { ObjectId } from "mongodb";
import { House, Review } from "..";
import { HouseRepository } from "./house.repository";
import { houseContext } from "../house.context";

export const houseDbRepository: HouseRepository = {
    getHouseList: async (page?: number, pageSize?: number): Promise<House[]> => {
        const skip = (page - 1) * pageSize;
        const limit = pageSize ?? 0;
        return houseContext.find().skip(skip).limit(limit).lean();
    },
    getHouseListByCountry: async (country: string, page?: number, pageSize?: number): Promise<House[]> => {
        const skip = (page - 1) * pageSize;
        const limit = pageSize ?? 0;
        return await houseContext.find({
            $or: [
                { 'address.country': country },
                { 'address.country_code': country }
            ]
        })
            .skip(skip).limit(limit).lean();
    },
    getHouse: async (id: string): Promise<House> => await houseContext.findOne({ _id: id }),
    reviewHouse: async (id: string, review: Review): Promise<Review> => {
        review = { ...review, _id: new ObjectId().toHexString() };
        const house = await houseContext.findOne({ _id: id });
        house.reviews.push(review);
        await houseContext.findOneAndUpdate(
            {
                _id: house._id
            },
            {
                $set: house
            },
            { upsert: true, returnDocument: 'after' }
        ).lean();
        return review;

    },
    updateHouse: async (house: House): Promise<House> => {
        const updatedHouse = await houseContext.findOneAndUpdate(
            {
                _id: house._id,
            },
            {
                $set: house,
            },
            { upsert: true, ignoreUndefined: true, returnDocument: 'after' }
        ).lean();
        return updatedHouse;
    }
}