import { ObjectId } from "mongodb";
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
        return await getHouseContext().find({
            $or: [
                { 'address.country': country },
                { 'address.country_code': country }
            ]
        })
            .skip(skip).limit(limit).toArray();
    },
    getHouse: async (id: string): Promise<House> => await getHouseContext().findOne({ _id: id }),
    reviewHouse: async (id: string, review: Review): Promise<Review> => {
        review = { ...review, _id: new ObjectId().toHexString() };
        const house = await getHouseContext().findOne({ _id: id });
        house.reviews.push(review);
        await getHouseContext().findOneAndUpdate(
            {
                _id: house._id
            },
            {
                $set: house
            },
            { upsert: true, returnDocument: 'after' }
        );
        return review

    }
}