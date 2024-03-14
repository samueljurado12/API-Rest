
export interface HouseHome {
    name: string;
    image_url: string;
}

export interface Review {
    author_name: string;
    date: Date;
    comments: string;
}

export interface HouseDetail {
    name: string;
    image_url: string;
    description: string;
    address: string;
    bedrooms: number;
    beds: number;
    bathroom: number;
    latest_reviews: Review[];
}