import * as model from 'dals'
import * as apiModel from './house.api-model'
import { mapHouseFromModelToApiDetail, mapHouseListFromModelToApiHome, mapReviewFromApiToModel, mapReviewFromModelToApi } from './house.mapper'

describe('pods/house/house.mapper spec', () => {
    describe('mapHouseListFromModelToApiHome', () => {
        it.each<model.House[]>([undefined, null, []])('should return empty array when it feeds houseList equals %p', (houseList: any) => {
            const result = mapHouseListFromModelToApiHome(houseList);

            expect(result).toEqual([]);
        });

        it('should return one mapped item in array when it feeds houseList with one item', () => {
            const houseList: model.House[] = [
                {
                    _id: '60c20a334bec6a37b08acec9',
                    name: 'test house',
                    images: {
                        thumbnail_url: "test/url"
                    }
                }
            ];

            const result = mapHouseListFromModelToApiHome(houseList);

            const expectedResult: Pick<apiModel.House, "id" | "name" | "image_url">[] = [
                {
                    id: '60c20a334bec6a37b08acec9',
                    name: 'test house',
                    image_url: 'test/url'
                }
            ];

            expect(result).toEqual(expectedResult)
        });

    })


    describe('mapHouseFromModelToApiDetail', () => {

        it('should return mapped item when it feeds one house', () => {
            const house: model.House =
            {
                _id: '60c20a334bec6a37b08acec9',
                name: 'test house',
                images: {
                    medium_url: "test/url"
                },
                description: 'test description',
                address: {
                    suburb: 'test suburb',
                    street: 'test, test, test'
                },
                bedrooms: 4,
                beds: 3,
                bathrooms: 2,
                reviews: []
            };

            const result = mapHouseFromModelToApiDetail(house);

            const expectedResult: apiModel.House =
            {
                id: '60c20a334bec6a37b08acec9',
                name: 'test house',
                image_url: 'test/url',
                address: 'test suburb, test, test, test',
                bathroom: 2,
                bedrooms: 4,
                beds: 3,
                latest_reviews: [],
                description: 'test description'
            };

            expect(result).toEqual(expectedResult)
        });
    })

    describe('mapReviewFromModelToApi', () => {

        it('should return mapped item when it feeds one review', () => {

            const date = new Date();
            const review: model.Review =
            {
                _id: '60c20a334bec6a37b08acec9',
                reviewer_name: "test name",
                comments: "Test comments. 10/10.",
                date: date,
                listing_id: "1",
                reviewer_id: "1"
            };

            const result = mapReviewFromModelToApi(review);

            const expectedResult: apiModel.Review =
            {
                id: '60c20a334bec6a37b08acec9',
                author_name: "test name",
                comments: "Test comments. 10/10.",
                date: date.toISOString(),
            };

            expect(result).toEqual(expectedResult)
        });

    });

    describe('mapReviewFromApiToModel', () => {

        it('should return mapped item when it feeds one review', () => {

            const date = new Date();
            const review: apiModel.Review =
            {
                author_name: "test name",
                comments: "Test comments. 10/10.",
                id: null,
                date: null
            };

            const result = mapReviewFromApiToModel(review);

            const expectedResult: model.Review =
            {
                reviewer_name: "test name",
                comments: "Test comments. 10/10.",
            };

            expect(result).toEqual(expectedResult)
        });

    });

})