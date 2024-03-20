import { Role, UserSession } from 'common-app';
import { envConstants } from 'core/constants';
import { RequestHandler, Request } from 'express';
import jwt from 'jsonwebtoken'

const verify = (token: string, secret: string): Promise<UserSession> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (error, userSession: UserSession) => {
            if (error) reject(error);

            if (userSession) resolve(userSession);
        })
    })
}

export const authenticationMiddleware: RequestHandler = async (req: Request, res, next) => {
    try {
        const [, token] = req.cookies.authorization?.split(' ') ?? '';
        if (token) {
            const userSession = await verify(token, envConstants.secret);

            req.userSession = userSession;

            next();
        } else {
            res.sendStatus(401);
        }
    }
    catch (error) {
        next(error);
    }
}

const isAuthorized = (allowedRoles: Role[], currentRole: Role): boolean =>
    !Boolean(allowedRoles) ||
    (Boolean(currentRole) && allowedRoles.some((role) => currentRole === role))

export const authorizationMiddleware = (allowedRoles?: Role[]): RequestHandler => async (req, res, next) => {
    if (isAuthorized(allowedRoles, req.userSession.role)) {
        next()
    } else {
        res.sendStatus(403);
    }
}
