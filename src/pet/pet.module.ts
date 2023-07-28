import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { PetMiddleware } from './pet.middleware';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from 'src/entities/pet.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PetEntity])],
    controllers: [PetController],
    providers: [PetService],
})
export class PetModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(PetMiddleware)
            .forRoutes({ path: 'pet', method: RequestMethod.POST });
    }
}
