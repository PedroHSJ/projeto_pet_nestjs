import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { BaseEntity } from './base.entity';
import { EstabelecimentoEntity } from './estabelecimento.entity';
import { Exclude, Expose } from 'class-transformer';
import { PetEntity } from './pet.entity';
import { Role } from 'src/enums/role.enum';
import { RoleDTO } from 'src/dto/role.dto';

@Entity('usuarios')
export class UsuarioEntity implements BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 64, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 64 })
    password: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'bit', default: 1 })
    ativo: number;

    @ManyToOne(() => EstabelecimentoEntity, { nullable: true })
    estabelecimento: EstabelecimentoEntity;

    @ManyToOne(() => RoleEntity, (role) => role.usuarios)
    @JoinColumn({ name: 'role_id' })
    role: RoleEntity;

    // @OneToMany(() => PetEntity, (pet) => pet.usuario)
    // pets: PetEntity[];
}
