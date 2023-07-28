import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UsuarioSchema } from './usuario.schema';

@Injectable()
export class UsuarioMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            await UsuarioSchema.validate(req.body, { abortEarly: false });
            next();
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}
