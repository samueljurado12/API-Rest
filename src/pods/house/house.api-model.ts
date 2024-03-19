
export interface HouseHome {
    id: string;
    name: string;
    image_url: string;
}

export interface Review {
    id: string;
    author_name: string;
    date: string;
    comments: string;
}

export interface HouseDetail {
    id: string;
    name: string;
    image_url: string;
    description: string;
    address: string;
    bedrooms: number;
    beds: number;
    bathroom: number;
    latest_reviews: Review[];
}