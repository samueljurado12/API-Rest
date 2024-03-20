import { Router } from "express";

export const securityApi = Router();

securityApi.post('/login', async (req, res, next) => {
    try {
        // TODO
    } catch (error) {
        next(error);
    }
})

securityApi.post('/logout', async (req, res) => {
    // TODO
    res.sendStatus(200);
})