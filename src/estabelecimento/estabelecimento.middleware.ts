import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { EstabelecimentoSchema } from './estabelecimento.schema';

export class EstabelecimentoMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            await EstabelecimentoSchema.validate(req.body, {
                abortEarly: false,
            });
            next();
        } catch (erro) {
            next(erro);
        }
    }
}
