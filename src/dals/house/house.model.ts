
export interface DbImage {
    thumbnail_url?: string;
    medium_url?: string;
    picture_url?: string;
    xl_picture_url?: string;
}

export interface Host {
    host_id?: string;
    host_url?: string;
    host_name?: string;
    host_location?: string;
    host_about?: string
    host_response_time?: string;
    host_thumbnail_url?: string;
    host_picture_url?: string;
    host_neighbourhood?: string;
    host_response_rate?: number;
    host_is_superhost?: boolean;
    host_has_profile_pic?: boolean;
    host_identity_verified?: boolean;
    host_listings_count?: number;
    host_total_listings_count?: number;
    host_verifications?: string[];
}

export interface Address {
    street?: string;
    suburb?: string;
    government_area?: string;
    market?: string;
    country?: string;
    country_code?: string;
}

export interface Availability {
    availability_30?: number;
    availability_60?: number;
    availability_90?: number;
    availability_365?: number;
}

export interface ReviewScores {
    review_scores_accuracy?: number;
    review_scores_cleanliness?: number;
    review_scores_checkin?: number;
    review_scores_communication?: number;
    review_scores_location?: number;
    review_scores_value?: number;
    review_scores_rating?: number;
}

export interface Review {
    _id?: string;
    date?: Date;
    listing_id?: string;
    reviewer_id?: string;
    reviewer_name?: string;
    comments?: string;
}

export interface House {
    _id?: string;
    listing_url?: string;
    name?: string;
    summary?: string;
    space?: string;
    description?: string;
    neighborhood_overview?: string;
    notes?: string;
    transit?: string;
    access?: string;
    interaction?: string;
    house_rules?: string;
    property_type?: string;
    room_type?: string;
    bed_type?: string;
    minimum_nights?: string;
    maximum_nights?: string;
    cancellation_policy?: string;
    last_scraped?: Date;
    calendar_last_scraped?: Date;
    first_review?: Date;
    last_review?: Date;
    accommodates?: number;
    bedrooms?: number;
    beds?: number;
    number_of_reviews?: number;
    bathrooms?: number;
    amenities?: string[];
    price?: number;
    weekly_price?: number;
    monthly_price?: number;
    security_deposit?: number;
    cleaning_fee?: number;
    extra_people?: number;
    guests_included?: number;
    images?: DbImage;
    host?: Host;
    address?: Address;
    availability?: Availability;
    review_scores?: ReviewScores;
    reviews?: Review[];
}