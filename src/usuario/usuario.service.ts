import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { hash } from 'bcrypt';
import { UsuarioDTO } from 'src/dto/usuario.dto';
import { UsuarioEntity } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async findAll(): Promise<UsuarioEntity[]> {
        const usuarios = await this.usuarioRepository
            .createQueryBuilder('usuario')
            .leftJoinAndSelect('usuario.estabelecimento', 'estabelecimento')
            .leftJoinAndSelect('usuario.roles', 'roles')
            .getMany();

        return usuarios;
    }

    async findByUsername(username: string): Promise<UsuarioEntity | null> {
        const usuario = await this.usuarioRepository.findOneBy({
            username: username,
        });

        return usuario;
    }

    async create(usuario: UsuarioDTO): Promise<{ id: string }> {
        const usuarioExiste = await this.findByUsername(usuario.username);
        if (usuarioExiste)
            throw new BadRequestException('Nome de usuário já existe');
        usuario.password = await hash(usuario.password, 10);
        const usuarioCriado = await this.usuarioRepository.save(
            this.usuarioRepository.create(usuario),
        );
        return { id: usuarioCriado.id };
    }
}
