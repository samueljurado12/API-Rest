import { UserSession } from "common-app";
import { envConstants } from "core/constants";
import { userRepository } from "dals/user";
import { Router } from "express";
import jwt from 'jsonwebtoken'

export const securityApi = Router();

securityApi.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userRepository.getUserByEmailAndPassword(email, password);
        if (user) {
            const session: UserSession = {
                id: user._id.toHexString(),
                role: user.role
            }

            const token = jwt.sign(session, envConstants.secret, {
                expiresIn: '1d'
            });

            res.cookie('authorization', `Bearer ${token}`, {
                httpOnly: true,
                secure: envConstants.isProduction,
            });

            res.sendStatus(204);

        } else {
            res.sendStatus(401);

        }
    } catch (error) {
        next(error);
    }
})

securityApi.post('/logout', async (_, res) => {
    res.clearCookie('authorization');
    res.sendStatus(200);
})