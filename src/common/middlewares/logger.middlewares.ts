import { RequestHandler, ErrorRequestHandler } from 'express';

export const logRequestMiddleware: RequestHandler = async (req, _, next) => {
    console.log(req.url);
    next();
};

export const logErrorRequestMiddleware: ErrorRequestHandler = async (
    error,
    _,
    res,
    __
) => {
    console.error(error);
    res.sendStatus(500);
};