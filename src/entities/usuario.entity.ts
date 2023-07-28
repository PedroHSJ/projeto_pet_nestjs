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

    @ManyToMany(() => RoleEntity, (role) => role.usuarios)
    @JoinTable({
        name: 'usuarios_roles',
        joinColumn: {
            name: 'usuario_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
    })
    roles: RoleEntity[];

    @Column({ type: 'bit', default: 1 })
    ativo: number;

    @ManyToOne(() => EstabelecimentoEntity, { nullable: true })
    estabelecimento: EstabelecimentoEntity;

    @OneToMany(() => PetEntity, (pet) => pet.usuario)
    pets: PetEntity[];
}
