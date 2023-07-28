import { Exclude, Expose } from 'class-transformer';
import { RoleEntity } from 'src/entities/role.entity';
import { UsuarioEntity } from 'src/entities/usuario.entity';
import { RoleDTO } from './role.dto';
import { EstabelecimentoDTO } from './estabelecimento.dto';
import { Role } from 'src/enums/role.enum';

export class UsuarioDTO {
    username: string;
    password: string;
    email: string;
    role: RoleDTO;
    estabelecimento: {
        id: string;
    };
}
