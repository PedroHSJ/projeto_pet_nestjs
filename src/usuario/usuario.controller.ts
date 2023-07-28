import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from 'src/entities/usuario.entity';
import { UsuarioDTO } from 'src/dto/usuario.dto';
import { ApiResponseInterface } from 'src/interfaces/apiResponse.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get()
    async findAll(): Promise<ApiResponseInterface<UsuarioEntity>> {
        const usuarios = await this.usuarioService.findAll();
        const response: ApiResponseInterface<UsuarioEntity> = {
            items: usuarios,
            totalCount: usuarios.length,
            skip: 0,
            take: usuarios.length,
        };
        return response;
    }

    @Post()
    async create(@Body() usuario: UsuarioDTO): Promise<{ id: string }> {
        return this.usuarioService.create(usuario);
    }
}
