import { House, Review } from "..";

export interface HouseRepository {
    getHouseList: (page?: number, pageSize?: number) => Promise<House[]>;
    getHouseListByCountry: (country: string, page?: number, pageSize?: number) => Promise<House[]>;
    getHouse: (id: string) => Promise<House>;
    reviewHouse: (id: string, review: Review) => Promise<Review>;
    updateHouse: (house: House) => Promise<House>;
}