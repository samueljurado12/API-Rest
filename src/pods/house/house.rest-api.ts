import { houseRepository } from "dals/house";
import { Router } from "express";

export const houseApi = Router()

houseApi
    .get("/", async (req, res, next) => {
        try {
            const page = Number(req.query.page);
            const pageSize = Number(req.query.pageSize);
            const country = String(req.query.country);
            const houseList = country ? await houseRepository.getHouseListByCountry(country, page, pageSize) :
                await houseRepository.getHouseList(page, pageSize);
            res.send(houseList)
        }
        catch (error) {
            next(error);
        }
    })
    .get("/:id", async (req, res, next) => {
        try {
            const id = req.params.id;
            const house = await houseRepository.getHouse(id);
            res.send(house)
        }
        catch (error) {
            next(error);
        }
    })
    .post("/:id/review", async (req, res, next) => {
        try {
            res.sendStatus(204)
        }
        catch (error) {
            next(error);
        }
    })