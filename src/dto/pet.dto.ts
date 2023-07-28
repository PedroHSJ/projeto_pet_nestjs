import { UsuarioDTO } from './usuario.dto';

export class PetDTO {
    nome: string;
    peso: number;
    data_nascimento: Date;
    usuario: UsuarioDTO;
}
