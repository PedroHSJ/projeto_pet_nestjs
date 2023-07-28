import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstabelecimentoDTO } from 'src/dto/estabelecimento.dto';
import { EstabelecimentoEntity } from 'src/entities/estabelecimento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstabelecimentoService {
    constructor(
        @InjectRepository(EstabelecimentoEntity)
        private estabelecimentoRepository: Repository<EstabelecimentoEntity>,
    ) {}

    async findAll(): Promise<EstabelecimentoEntity[]> {
        return this.estabelecimentoRepository.find();
    }

    async create(estabelecimento: EstabelecimentoDTO): Promise<{ id: string }> {
        const estabelecimentoSalvo = await this.estabelecimentoRepository.save(
            this.estabelecimentoRepository.create(estabelecimento),
        );
        return { id: estabelecimentoSalvo.id };
    }
}
