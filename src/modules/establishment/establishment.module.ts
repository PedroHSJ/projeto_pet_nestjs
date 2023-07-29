import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { EstablishmentEntity } from 'src/app/entities/establishment.entity';
import { EstablishmentSchema } from './establishment.schema';
import { EstablishmentMiddleware } from './establishment.middleware';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentService } from './establishment.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([EstablishmentEntity])],
    controllers: [EstablishmentController],
    providers: [EstablishmentService],
})
export class EstablishmentModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(EstablishmentMiddleware)
            .forRoutes({ path: 'establishment', method: RequestMethod.POST });
    }
}
