import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsuarioEntity } from 'src/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioMiddleware } from './usuario.middleware';
import { APP_FILTER } from '@nestjs/core';
import { ErrorInterceptor } from 'src/interceptor/error.interceptor';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import path from 'path';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(UsuarioMiddleware)
            .forRoutes({ path: 'usuario', method: RequestMethod.POST });
    }
}
