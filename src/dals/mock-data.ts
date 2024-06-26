import { ObjectId } from "mongodb"
import { House } from "./house"
import { User } from "./user/user.model"

export interface DB {
    houses: House[],
    users: User[]
}

export const db: DB = {
    users: [
        {
            _id: new ObjectId(),
            email: "user@email.com",
            password: "test",
            salt: "",
            role: "standard"
        },
        {
            _id: new ObjectId(),
            email: "admin@email.com",
            password: "test",
            salt: "",
            role: "admin"
        }
    ],
    houses: [
        {
            _id: '10009999',
            listing_url: "https://www.airbnb.com/rooms/10009999",
            name: "Horto flat with small garden",
            summary: "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area.",
            space: "Lovely one bedroom + sofa-bed in the living room, perfect for two but fits up to four comfortably.  There´s a small outside garden with a shower There´s a well equipped open kitchen with both 110V / 220V wall plugs and one bathroom with shower, tub and even a sauna machine! All newly refurbished!",
            description: "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area. Lovely one bedroom + sofa-bed in the living room, perfect for two but fits up to four comfortably.  There´s a small outside garden with a shower There´s a well equipped open kitchen with both 110V / 220V wall plugs and one bathroom with shower, tub and even a sauna machine! All newly refurbished! I´ll be happy to help you with any doubts, tips or any other information needed during your stay. This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy, b",
            neighborhood_overview: "This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy, bakery, small market - in the area.",
            notes: "There´s a table in the living room now, that does not show in the photos.",
            transit: "Easy access to transport (bus, taxi, car) and easy free parking around. Very close to Gávea, Leblon, Ipanema, Copacabana and Botafogo.",
            access: "",
            interaction: "I´ll be happy to help you with any doubts, tips or any other information needed during your stay.",
            house_rules: "I just hope the guests treat the space as they´re own, with respect to it as well as to my neighbours! Espero apenas que os hóspedes tratem o lugar com carinho e respeito aos vizinhos!",
            property_type: "Apartment",
            room_type: "Entire home/apt",
            bed_type: "Real Bed",
            minimum_nights: "2",
            maximum_nights: "1125",
            cancellation_policy: "flexible",
            last_scraped: new Date(),
            calendar_last_scraped: new Date(),
            accommodates: 4,
            bedrooms: 1,
            beds: 2,
            number_of_reviews: 0,
            bathrooms: 1,
            amenities: [
                "Wifi",
                "Wheelchair accessible",
                "Kitchen",
                "Free parking on premises",
                "Smoking allowed",
                "Hot tub",
                "Buzzer/wireless intercom",
                "Family/kid friendly",
                "Washer",
                "First aid kit",
                "Essentials",
                "Hangers",
                "Hair dryer",
                "Iron",
                "Laptop friendly workspace"
            ],
            price: 317,
            weekly_price: 1492,
            monthly_price: 4849,
            cleaning_fee: 187,
            extra_people: 0,
            guests_included: 1,
            images: {
                thumbnail_url: "",
                medium_url: "",
                picture_url: "https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large",
                xl_picture_url: ""
            },
            host: {
                host_id: '1282196',
                host_url: "https://www.airbnb.com/users/show/1282196",
                host_name: "Ynaie",
                host_location: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
                host_about: "I am an artist and traveling is a major part of my life.I love treating visitors the way I like to be treated when I´m abroad and I'm usually renting my flat while I'm away.I can recommend some cool parties and nights out as well as advise on some hidden secrets of Rio’s nature!",
                host_thumbnail_url: "https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_small",
                host_picture_url: "https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_x_medium",
                host_neighbourhood: "Jardim Botânico",
                host_is_superhost: false,
                host_has_profile_pic: true,
                host_identity_verified: false,
                host_listings_count: 1,
                host_total_listings_count: 1,
                host_verifications: [
                    "email",
                    "phone",
                    "facebook"
                ]
            },
            address: {
                street: "Rio de Janeiro, Rio de Janeiro, Brazil",
                suburb: "Jardim Botânico",
                government_area: "Jardim Botânico",
                market: "Rio De Janeiro",
                country: "Brazil",
                country_code: "BR",
            },
            availability: {
                availability_30: 0,
                availability_60: 0,
                availability_90: 0,
                availability_365: 0
            },
            review_scores: {},
            reviews: []
        },
        {
            _id: '1001265',
            listing_url: "https://www.airbnb.com/rooms/1001265",
            name: "Ocean View Waikiki Marina w/prkg",
            summary: "A short distance from Honolulu's billion dollar mall, and the same distance to Waikiki. Parking included. A great location that work perfectly for business, education, or simple visit. Experience Yacht Harbor views and 5 Star Hilton Hawaiian Village.",
            space: "Great studio located on Ala Moana across the street from Yacht Harbor and near Ala Moana Shopping Center. Studio kitchette, parking, wifi, TV, A/C. Amenities include pool, hot tub and tennis. Sweet ocean views with nice ocean breezes.",
            description: "A short distance from Honolulu's billion dollar mall, and the same distance to Waikiki. Parking included. A great location that work perfectly for business, education, or simple visit. Experience Yacht Harbor views and 5 Star Hilton Hawaiian Village. Great studio located on Ala Moana across the street from Yacht Harbor and near Ala Moana Shopping Center. Studio kitchette, parking, wifi, TV, A/C. Amenities include pool, hot tub and tennis. Sweet ocean views with nice ocean breezes. Pool, hot tub and tennis We try our best at creating, simple responsive management which never bothers the guest. You can breath ocean as well as aloha. Honolulu does have a very good air conditioned bus system.",
            neighborhood_overview: "You can breath ocean as well as aloha.",
            notes: "",
            transit: "Honolulu does have a very good air conditioned bus system.",
            access: "Pool, hot tub and tennis",
            interaction: "We try our best at creating, simple responsive management which never bothers the guest.",
            house_rules: "The general welfare and well being of all the community.",
            property_type: "Condominium",
            room_type: "Entire home/apt",
            bed_type: "Real Bed",
            minimum_nights: "3",
            maximum_nights: "365",
            cancellation_policy: "strict_14_with_grace_period",
            last_scraped: new Date("2019-03-06T05:00:00.000Z"),
            calendar_last_scraped: new Date("2019-03-06T05:00:00.000Z"),
            first_review: new Date("2013-05 - 24T04:00:00.000Z"),
            last_review: new Date("2019-02-07T05:00:00.000Z"),
            accommodates: 2,
            bedrooms: 1,
            beds: 1,
            number_of_reviews: 96,
            bathrooms: 1,
            amenities: [
                "TV",
                "Cable TV",
                "Wifi",
                "Air conditioning",
                "Pool",
                "Kitchen",
                "Free parking on premises",
                "Elevator",
                "Hot tub",
                "Washer",
                "Dryer",
                "Essentials",
                "Shampoo",
                "Hangers",
                "Hair dryer",
                "Iron",
                "Laptop friendly workspace",
                "Self check-in",
                "Lockbox",
                "Hot water",
                "Bed linens",
                "Extra pillows and blankets",
                "Ethernet connection",
                "Microwave",
                "Coffee maker",
                "Refrigerator",
                "Dishes and silverware",
                "Cooking basics",
                "Stove",
                "BBQ grill",
                "Garden or backyard",
                "Well-lit path to entrance",
                "Disabled parking spot",
                "Step-free access",
                "Wide clearance to bed",
                "Step-free access"
            ],
            price: 115,
            weekly_price: 650,
            monthly_price: 2150,
            cleaning_fee: 100,
            extra_people: 0,
            guests_included: 1,
            images: {
                thumbnail_url: "",
                medium_url: "",
                picture_url: "https://a0.muscache.com/im/pictures/15037101/5aff14a7_original.jpg?aki_policy=large",
                xl_picture_url: ""
            },
            host: {
                host_id: '5448114',
                host_url: "https://www.airbnb.com/users/show/5448114",
                host_name: "David",
                host_location: "Honolulu, Hawaii, United States",
                host_about: "I have 30 years of experience in the Waikiki Real Estate Market. We specialize in local sales and property management. Our goal is service and aloha. We want to help people enjoy Hawaii.",
                host_response_time: "within an hour",
                host_thumbnail_url: "https://a0.muscache.com/im/users/5448114/profile_pic/1363202219/original.jpg?aki_policy=profile_small",
                host_picture_url: "https://a0.muscache.com/im/users/5448114/profile_pic/1363202219/original.jpg?aki_policy=profile_x_medium",
                host_neighbourhood: "Waikiki",
                host_response_rate: 98,
                host_is_superhost: false,
                host_has_profile_pic: true,
                host_identity_verified: false,
                host_listings_count: 18,
                host_total_listings_count: 18,
                host_verifications: [
                    "email",
                    "phone",
                    "reviews",
                    "kba"
                ]
            },
            address: {
                street: "Honolulu, HI, United States",
                suburb: "Oʻahu",
                government_area: "Primary Urban Center",
                market: "Oahu",
                country: "United States",
                country_code: "US",
            },
            availability: {
                availability_30: 16,
                availability_60: 46,
                availability_90: 76,
                availability_365: 343
            },
            review_scores: {
                review_scores_accuracy: 9,
                review_scores_cleanliness: 8,
                review_scores_checkin: 9,
                review_scores_communication: 9,
                review_scores_location: 10,
                review_scores_value: 9,
                review_scores_rating: 84
            },
            reviews: [
                {
                    _id: '13165166545614',
                    date: new Date("2013-05-24T04:00:00.000Z")
                    ,
                    listing_id: '5448114',
                    reviewer_id: '456189156156',
                    reviewer_name: "Jacqui",
                    comments: "Our stay was excellent.  The place had a breath taking view.  David was very accommodating with our hotel stay, parking availability and all of our concerns & questions.  He did above and beyond what anyone would want.  He's a man of his word and very professional.  We highly recommend for everyone to stay in all of the places he recommended.  Thank you David for a accommodating our wonderful and memorable stay in Honolulu, Hawaii.  God Bless!  Henry & Jacqui (SF, CA)"
                },
                {
                    _id: '8989456165',
                    date: new Date("2013-06-01T04:00:00.000Z"),
                    listing_id: '5448114',
                    reviewer_id: '12345',
                    reviewer_name: "Khoren",
                    comments: "Tell others in the Airbnb community about your stay."
                }

            ]
        }
    ]
}