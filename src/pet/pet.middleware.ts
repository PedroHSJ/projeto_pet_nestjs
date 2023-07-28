import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PetSchema } from './pet.schema';

export class PetMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            await PetSchema.validate(req.body, { abortEarly: false });
            next();
        } catch (error) {
            next(error);
        }
    }
}
