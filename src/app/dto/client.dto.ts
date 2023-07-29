import { PetDTO } from './pet.dto';

export class ClienteDTO {
    name: string;
    cpf: string;
    email: string;
    telefone: string;
    pets: [{ id: string }];
}
