import { Body, Controller, Get, Post } from '@nestjs/common';
import { EstabelecimentoEntity } from 'src/entities/estabelecimento.entity';
import { EstabelecimentoService } from './estabelecimento.service';
import { ApiResponseInterface } from 'src/interfaces/apiResponse.interface';
import { EstabelecimentoDTO } from 'src/dto/estabelecimento.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estabelecimento')
@Controller('estabelecimento')
export class EstabelecimentoController {
    constructor(private estabelecimentoService: EstabelecimentoService) {}

    @Get()
    async findAll(): Promise<ApiResponseInterface<EstabelecimentoEntity>> {
        const estabelecimentos = await this.estabelecimentoService.findAll();
        const response: ApiResponseInterface<EstabelecimentoEntity> = {
            items: estabelecimentos,
            totalCount: estabelecimentos.length,
            skip: 0,
            take: estabelecimentos.length,
        };
        return response;
    }

    @Post()
    async create(
        @Body() estabelecimento: EstabelecimentoDTO,
    ): Promise<{ id: string }> {
        return this.estabelecimentoService.create(estabelecimento);
    }
}
