import * as model from 'dals/house'
import * as apiModel from './house.api-model'

const getAddressStringified = (address: model.Address): string => `${address.suburb}, ${address.street}`

const mapHouseFromModelToApiHome = (house: model.House): apiModel.HouseHome => ({
    id: house._id.toHexString(),
    name: house.name,
    image_url: [house.images?.thumbnail_url, house.images?.medium_url, house.images?.picture_url, house.images?.xl_picture_url].find(i => i)
});

export const mapHouseListFromModelToApiHome = (houses: model.House[]): apiModel.HouseHome[] => houses.map(h => mapHouseFromModelToApiHome(h));

export const mapHouseFromModelToApiDetail = (house: model.House): apiModel.HouseDetail => ({
    id: house._id.toHexString(),
    image_url: [house.images?.xl_picture_url, house.images?.picture_url, house.images?.medium_url, house.images?.xl_picture_url].find(i => i),
    name: house.name,
    bathroom: house.bathrooms,
    bedrooms: house.bedrooms,
    beds: house.beds,
    description: house.description,
    address: getAddressStringified(house.address),
    latest_reviews: house.reviews.sort((h1, h2) => h1.date?.getTime() - h2.date?.getTime()).slice(0, 5).map(r => mapReviewFromModelToApi(r))
})

export const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
    id: review._id.toHexString(),
    author_name: review.reviewer_name,
    comments: review.comments,
    date: review.date.toISOString()
})

export const mapReviewFromApiToModel = (review: apiModel.Review): model.Review => ({
    comments: review.comments,
    reviewer_name: review.author_name
})