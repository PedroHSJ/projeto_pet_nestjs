import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstablishmentDTO } from 'src/app/dto/establishment.dto';
import { EstablishmentEntity } from 'src/app/entities/establishment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstablishmentService {
    constructor(
        @InjectRepository(EstablishmentEntity)
        private establishmentRepository: Repository<EstablishmentEntity>,
    ) {}

    async create(establishment: EstablishmentDTO): Promise<{ id: string }> {
        const establishmentEntity =
            this.establishmentRepository.create(establishment);
        const establishmentCreated = await this.establishmentRepository.save(
            establishmentEntity,
        );
        return { id: establishmentCreated.id };
    }

    async findAll(
        take: number,
        skip: number,
        sort: string,
    ): Promise<EstablishmentEntity[]> {
        console.log(take, skip, sort);
        return this.establishmentRepository.find({
            take,
            skip,
        });
    }
}
