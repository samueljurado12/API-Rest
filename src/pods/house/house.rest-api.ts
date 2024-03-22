import { Review, houseRepository } from "dals/house";
import { Router } from "express";
import { mapHouseFromApiToModel, mapHouseFromModelToApiDetail, mapHouseListFromModelToApiHome, mapReviewFromApiToModel, mapReviewFromModelToApi } from "./house.mapper";
import { authorizationMiddleware } from "pods/security/security.middlewares";

export const houseApi = Router()

houseApi
    .get("/", async (req, res, next) => {
        try {
            const page = Number(req.query.page);
            const pageSize = Number(req.query.pageSize);
            const country = String(req.query.country ?? '');
            const houseList = country ? await houseRepository.getHouseListByCountry(country, page, pageSize) :
                await houseRepository.getHouseList(page, pageSize);
            res.send(mapHouseListFromModelToApiHome(houseList))
        }
        catch (error) {
            next(error);
        }
    })
    .get("/:id", async (req, res, next) => {
        try {
            const id = req.params.id;
            const house = await houseRepository.getHouse(id);
            res.send(mapHouseFromModelToApiDetail(house))
        }
        catch (error) {
            next(error);
        }
    })
    .post("/:id/review", async (req, res, next) => {
        try {
            const houseId = req.params.id;
            const review: Review = {
                ...mapReviewFromApiToModel(req.body),
                date: new Date(),
                listing_id: houseId,
                reviewer_id: req.userSession.id
            }
            const newReview = await houseRepository.reviewHouse(houseId, review)
            res.send(mapReviewFromModelToApi(newReview));
        }
        catch (error) {
            next(error);
        }
    })
    .put("/:id", authorizationMiddleware(["admin"]), async (req, res, next) => {
        try {
            const { id } = req.params;
            if (await houseRepository.getHouse(id)) {
                const house = mapHouseFromApiToModel({ ...req.body, id });
                await houseRepository.updateHouse(house);
                res.sendStatus(204);
            } else {
                res.sendStatus(404);
            }
        } catch (error) {
            next(error);
        }
    })