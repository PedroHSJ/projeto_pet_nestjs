import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { ApiResponseInterface } from 'src/interfaces/apiResponse.interface';
import { PetEntity } from 'src/entities/pet.entity';
import { PetDTO } from 'src/dto/pet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pet')
@Controller('pet')
export class PetController {
    constructor(private petService: PetService) {}

    @Get()
    async findAll(): Promise<ApiResponseInterface<PetEntity>> {
        const pets = await this.petService.findAll();
        const response: ApiResponseInterface<PetEntity> = {
            items: pets,
            totalCount: pets.length,
            skip: 0,
            take: pets.length,
        };
        return response;
    }

    @Post()
    async create(@Body() pet: PetDTO): Promise<{ id: string }> {
        return this.petService.create(pet);
    }
}
