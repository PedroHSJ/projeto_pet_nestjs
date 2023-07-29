import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from 'src/app/enums/role.enum';
import { ClientEntity } from './client.entity';
import { EmployeEntity } from './employe.entity';

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ type: 'enum', enum: Role })
    nome: Role;
    @OneToMany(() => ClientEntity, (client) => client.role)
    clients: ClientEntity[];

    @OneToMany(() => EmployeEntity, (employe) => employe.role)
    employes: EmployeEntity[];
}
