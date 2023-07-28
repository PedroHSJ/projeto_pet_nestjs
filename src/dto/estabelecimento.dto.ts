import { Expose } from 'class-transformer';
import { UsuarioDTO } from './usuario.dto';

export class EstabelecimentoDTO {
    nome: string;
    cnpj: string;
    usuarios: UsuarioDTO[];
}
