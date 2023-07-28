import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDTO } from 'src/dto/role.dto';
import { RoleEntity } from 'src/entities/role.entity';
import { Role } from 'src/enums/role.enum';
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

    async findByName(nome: Role): Promise<RoleEntity | null> {
        const role = await this.roleRepository.findOne({
            where: { nome: nome },
        });
        return role;
    }

    async create(role: RoleDTO): Promise<{ id: string }> {
        const roleExiste = await this.findByName(role.nome);
        if (roleExiste) throw new BadRequestException('Role já existe');
        const roleCreated = await this.roleRepository.save(
            this.roleRepository.create(role),
        );
        return { id: roleCreated.id };
    }
}
