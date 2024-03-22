import * as model from 'dals/house'
import * as apiModel from './house.api-model'

const getAddressStringified = (address: model.Address): string => address ? `${address?.suburb}, ${address?.street}` : null

const getAddressFromString = (address: string): model.Address => {
    if (!address) return undefined;
    const [suburb, street] = address.split(",");
    return {
        suburb,
        street
    }
}

const mapHouseFromModelToApiHome = (house: model.House): Pick<apiModel.House, "id" | "name" | "image_url"> => ({
    id: house._id,
    name: house.name,
    image_url: [house.images?.thumbnail_url, house.images?.medium_url, house.images?.picture_url, house.images?.xl_picture_url].find(i => i)
});

export const mapHouseListFromModelToApiHome = (houses: model.House[]): Pick<apiModel.House, "id" | "name" | "image_url">[] => houses?.map(h => mapHouseFromModelToApiHome(h)) ?? [];

export const mapHouseFromModelToApiDetail = (house: model.House): apiModel.House => ({
    id: house?._id,
    image_url: [house?.images?.xl_picture_url, house?.images?.picture_url, house?.images?.medium_url, house?.images?.thumbnail_url].find(i => i),
    name: house?.name,
    bathroom: house?.bathrooms,
    bedrooms: house?.bedrooms,
    beds: house?.beds,
    description: house?.description,
    address: getAddressStringified(house?.address),
    latest_reviews: house?.reviews.sort((h1, h2) => - h1.date?.getTime() + h2.date?.getTime()).slice(0, 5).map(r => mapReviewFromModelToApi(r))
})

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
    _id: house.id,
    name: house.name,
    images: {
        xl_picture_url: house.image_url,
        medium_url: house.image_url,
        picture_url: house.image_url,
        thumbnail_url: house.image_url
    },
    description: house.description,
    bedrooms: house.bedrooms,
    beds: house.beds,
    bathrooms: house.bathroom,
    address: getAddressFromString(house.address)
})

export const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
    id: review._id,
    author_name: review.reviewer_name,
    comments: review.comments,
    date: review.date.toISOString()
})

export const mapReviewFromApiToModel = (review: apiModel.Review): model.Review => ({
    comments: review.comments,
    reviewer_name: review.author_name
})