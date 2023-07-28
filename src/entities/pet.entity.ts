import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { UsuarioEntity } from './usuario.entity';

@Entity('pets')
export class PetEntity implements BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ type: 'varchar', length: 255 })
    nome: string;

    @Column({ type: 'float' })
    peso: number;

    @Column({ type: 'timestamp' })
    data_nascimento: Date;

    @ManyToOne(() => UsuarioEntity, (usuario) => usuario.pets)
    usuario: UsuarioEntity;
}
