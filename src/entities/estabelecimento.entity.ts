import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { UsuarioEntity } from './usuario.entity';
@Entity('estabelecimentos')
export class EstabelecimentoEntity implements BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @Column({ type: 'varchar', length: 14, unique: true })
  cnpj: string;

  @OneToMany(() => UsuarioEntity, (usuario) => usuario.estabelecimento)
  usuarios: UsuarioEntity[];
}
