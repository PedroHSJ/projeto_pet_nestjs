import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Role } from 'src/enums/role.enum';

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ type: 'enum', enum: Role })
    nome: Role;
    @OneToMany(() => UsuarioEntity, (usuario) => usuario.role)
    usuarios: UsuarioEntity[];
}
