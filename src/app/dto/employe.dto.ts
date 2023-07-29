import { RoleDTO } from './role.dto';

export class EmployeDTO {
    username: string;
    password: string;
    email: string;
    role: RoleDTO;
    establishment: {
        id: string;
    };
}
