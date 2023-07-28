import { Exclude, Expose } from 'class-transformer';
import { RoleEntity } from 'src/entities/role.entity';
import { UsuarioEntity } from 'src/entities/usuario.entity';
import { RoleDTO } from './role.dto';
import { EstabelecimentoDTO } from './estabelecimento.dto';

@Expose()
export class UsuarioDTO {
    @Expose()
    username: string;
    @Exclude()
    password: string;
    @Expose()
    email: string;
    @Expose()
    roles: RoleDTO[];
    @Expose()
    estabelecimento: EstabelecimentoDTO;
}
