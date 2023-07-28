import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/config';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { PetModule } from './pet/pet.module';
import { EstabelecimentoModule } from './estabelecimento/estabelecimento.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [
                process.env.ENTITY_PATH ?? __dirname + '/**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
        UsuarioModule,
        RoleModule,
        AuthModule,
        PetModule,
        EstabelecimentoModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_FILTER,
            useClass: ErrorInterceptor,
        },
    ],
})
export class AppModule {}
