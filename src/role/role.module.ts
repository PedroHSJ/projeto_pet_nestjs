import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from 'src/entities/role.entity';
import { RoleMiddleware } from './role.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RoleMiddleware)
            .forRoutes({ path: 'role', method: RequestMethod.POST });
    }
}
