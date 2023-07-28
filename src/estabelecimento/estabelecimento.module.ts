import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { EstabelecimentoController } from './estabelecimento.controller';
import { EstabelecimentoService } from './estabelecimento.service';
import { EstabelecimentoMiddleware } from './estabelecimento.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstabelecimentoEntity } from 'src/entities/estabelecimento.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EstabelecimentoEntity])],
    controllers: [EstabelecimentoController],
    providers: [EstabelecimentoService],
})
export class EstabelecimentoModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(EstabelecimentoMiddleware)
            .forRoutes({ path: 'estabelecimento', method: RequestMethod.POST });
    }
}
