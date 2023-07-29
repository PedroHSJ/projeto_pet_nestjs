import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { EstablishmentSchema } from './establishment.schema';

export class EstablishmentMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            await EstablishmentSchema.validate(req.body, { abortEarly: false });
            next();
        } catch (error) {
            next(error);
        }
    }
}
