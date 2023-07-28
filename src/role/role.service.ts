import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDTO } from 'src/dto/role.dto';
import { RoleEntity } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
    ) {}

    async findAll(): Promise<RoleEntity[]> {
        const roles = await this.roleRepository.find();
        return roles;
    }

    async create(role: RoleDTO): Promise<{ id: string }> {
        const roleCreated = await this.roleRepository.save(
            this.roleRepository.create(role),
        );
        return { id: roleCreated.id };
    }
}
