import { model } from "mongoose";
import { House as ListingsAndReview } from "./house.model";
import { houseSchema } from "./house.schema";


export const houseContext = model<ListingsAndReview>('listingsAndReviews', houseSchema, 'listingsAndReviews')