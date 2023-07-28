import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 64, unique: true })
  nome: string;
  @ManyToMany(() => UsuarioEntity, (usuario) => usuario.roles)
  usuarios: UsuarioEntity[];
}
