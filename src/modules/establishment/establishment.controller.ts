import { Body, Controller, Post, Query, Get } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EstablishmentDTO } from 'src/app/dto/establishment.dto';
import { EstablishmentService } from './establishment.service';
import { URLSearchParams } from 'url';
import { EstablishmentEntity } from 'src/app/entities/establishment.entity';
import { ApiResponseInterface } from 'src/interfaces/apiResponse.interface';

@ApiTags('establishment')
@Controller('api/v1/establishment')
export class EstablishmentController {
    constructor(private readonly establishmentService: EstablishmentService) {}

    @Post()
    async create(
        @Body() establishment: EstablishmentDTO,
    ): Promise<{ id: string }> {
        return this.establishmentService.create(establishment);
    }

    @Get()
    @ApiQuery({ name: 'take', required: false })
    @ApiQuery({ name: 'skip', required: false })
    @ApiQuery({ name: 'sort', required: false })
    async findAll(
        @Query() query: any,
    ): Promise<ApiResponseInterface<EstablishmentEntity>> {
        const params = new URLSearchParams(query);
        const take =
            Number(params.get('take')) != 0 ? Number(params.get('take')) : 10;
        const skip = Number(params.get('skip'));
        const sort = params.get('sort') ?? 'ASC';
        if (take && skip && sort) {
        }
        const establishments = await this.establishmentService.findAll(
            take,
            skip,
            sort,
        );
        const response: ApiResponseInterface<EstablishmentEntity> = {
            items: establishments,
            totalCount: establishments.length,
            skip: +skip,
            take: +take,
        };
        return response;
    }
}
