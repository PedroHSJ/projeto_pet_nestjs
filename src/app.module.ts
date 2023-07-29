import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/config';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ErrorInterceptor } from './app/interceptor/error.interceptor';
import { EmployeModule } from './modules/employe/employe.module';
import { RoleModule } from './modules/role/role.module';
import { EstablishmentModule } from './modules/establishment/establishment.module';
import { ClientModule } from './modules/client/client.module';
import { PetModule } from './modules/pet/pet.module';

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
        ClientModule,
        PetModule,
        EmployeModule,
        RoleModule,
        EstablishmentModule,
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
