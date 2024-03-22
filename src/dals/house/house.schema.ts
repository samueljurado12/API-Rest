import { Schema } from "mongoose";
import { Address, Availability, DbImage, Host, House, Review, ReviewScores } from ".";

export const ImageSchema = new Schema<DbImage>({
    thumbnail_url: { type: Schema.Types.String, required: false },
    medium_url: { type: Schema.Types.String, required: false },
    picture_url: { type: Schema.Types.String, required: false },
    xl_picture_url: { type: Schema.Types.String, required: false },
})

export const HostSchema = new Schema<Host>({
    host_id: { type: Schema.Types.String, required: false },
    host_url: { type: Schema.Types.String, required: false },
    host_name: { type: Schema.Types.String, required: false },
    host_location: { type: Schema.Types.String, required: false },
    host_about: { type: Schema.Types.String, required: false },
    host_response_time: { type: Schema.Types.String, required: false },
    host_thumbnail_url: { type: Schema.Types.String, required: false },
    host_picture_url: { type: Schema.Types.String, required: false },
    host_neighbourhood: { type: Schema.Types.String, required: false },
    host_response_rate: { type: Schema.Types.Number, required: false },
    host_is_superhost: { type: Schema.Types.Boolean, required: false },
    host_has_profile_pic: { type: Schema.Types.Boolean, required: false },
    host_identity_verified: { type: Schema.Types.Boolean, required: false },
    host_listings_count: { type: Schema.Types.Number, required: false },
    host_total_listings_count: { type: Schema.Types.Number, required: false },
    host_verifications: [Schema.Types.String]
})

export const AddressSchema = new Schema<Address>({
    street: { type: Schema.Types.String, required: false },
    suburb: { type: Schema.Types.String, required: false },
    government_area: { type: Schema.Types.String, required: false },
    market: { type: Schema.Types.String, required: false },
    country: { type: Schema.Types.String, required: false },
    country_code: { type: Schema.Types.String, required: false },
})

export const ReviewScoresSchema = new Schema<ReviewScores>({
    review_scores_accuracy: { type: Schema.Types.Number, required: false },
    review_scores_cleanliness: { type: Schema.Types.Number, required: false },
    review_scores_checkin: { type: Schema.Types.Number, required: false },
    review_scores_communication: { type: Schema.Types.Number, required: false },
    review_scores_location: { type: Schema.Types.Number, required: false },
    review_scores_value: { type: Schema.Types.Number, required: false },
    review_scores_rating: { type: Schema.Types.Number, required: false },
})

export const ReviewSchema = new Schema<Review>({
    _id: { type: Schema.Types.String, required: false },
    date: { type: Schema.Types.Date, required: false },
    listing_id: { type: Schema.Types.String, required: false },
    reviewer_id: { type: Schema.Types.String, required: false },
    reviewer_name: { type: Schema.Types.String, required: false },
    comments: { type: Schema.Types.String, required: false },
})

export const AvailabilitySchema = new Schema<Availability>({
    availability_30: { type: Schema.Types.Number, required: false },
    availability_60: { type: Schema.Types.Number, required: false },
    availability_90: { type: Schema.Types.Number, required: false },
    availability_365: { type: Schema.Types.Number, required: false },
})

export const houseSchema = new Schema<House>({
    _id: { type: Schema.Types.String, required: false },
    listing_url: { type: Schema.Types.String, required: false },
    name: { type: Schema.Types.String, required: false },
    summary: { type: Schema.Types.String, required: false },
    space: { type: Schema.Types.String, required: false },
    description: { type: Schema.Types.String, required: false },
    neighborhood_overview: { type: Schema.Types.String, required: false },
    notes: { type: Schema.Types.String, required: false },
    transit: { type: Schema.Types.String, required: false },
    access: { type: Schema.Types.String, required: false },
    interaction: { type: Schema.Types.String, required: false },
    house_rules: { type: Schema.Types.String, required: false },
    property_type: { type: Schema.Types.String, required: false },
    room_type: { type: Schema.Types.String, required: false },
    bed_type: { type: Schema.Types.String, required: false },
    minimum_nights: { type: Schema.Types.String, required: false },
    maximum_nights: { type: Schema.Types.String, required: false },
    cancellation_policy: { type: Schema.Types.String, required: false },
    last_scraped: { type: Schema.Types.Date, required: false },
    calendar_last_scraped: { type: Schema.Types.Date, required: false },
    first_review: { type: Schema.Types.Date, required: false },
    last_review: { type: Schema.Types.Date, required: false },
    accommodates: { type: Schema.Types.Number, required: false },
    bedrooms: { type: Schema.Types.Number, required: false },
    beds: { type: Schema.Types.Number, required: false },
    number_of_reviews: { type: Schema.Types.Number, required: false },
    bathrooms: { type: Schema.Types.Number, required: false },
    amenities: [Schema.Types.String],
    price: { type: Schema.Types.Number, required: false },
    weekly_price: { type: Schema.Types.Number, required: false },
    monthly_price: { type: Schema.Types.Number, required: false },
    security_deposit: { type: Schema.Types.Number, required: false },
    cleaning_fee: { type: Schema.Types.Number, required: false },
    extra_people: { type: Schema.Types.Number, required: false },
    guests_included: { type: Schema.Types.Number, required: false },
    images: { type: ImageSchema, required: false },
    host: { type: HostSchema, required: false },
    address: { type: AddressSchema, required: false },
    availability: { type: AvailabilitySchema, required: false },
    review_scores: { type: ReviewScoresSchema, required: false },
    reviews: [ReviewSchema]
})