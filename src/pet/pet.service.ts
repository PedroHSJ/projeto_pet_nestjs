import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetDTO } from 'src/dto/pet.dto';
import { PetEntity } from 'src/entities/pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetService {
    constructor(
        @InjectRepository(PetEntity)
        private petRepository: Repository<PetEntity>,
    ) {}

    async findAll(): Promise<PetEntity[]> {
        const pets = await this.petRepository.find();
        return pets;
    }

    async create(pet: PetDTO): Promise<{ id: string }> {
        const petCriado = await this.petRepository.save(
            this.petRepository.create(pet),
        );
        return { id: petCriado.id };
    }
}
