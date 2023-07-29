import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { PetEntity } from './pet.entity';
import { RoleEntity } from './role.entity';

@Entity('clients')
export class ClientEntity implements BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    @Column({ type: 'varchar', length: 255 })
    name: string;
    @Column({ type: 'varchar', length: 11 })
    cpf: string;
    @Column({ type: 'varchar', length: 255 })
    email: string;
    @Column({ type: 'varchar', length: 255 })
    telefone: string;

    @OneToMany(() => PetEntity, (pet) => pet.client)
    pets: PetEntity[];

    @ManyToOne(() => RoleEntity, (role) => role.clients)
    @JoinColumn({ name: 'role_id' })
    role: RoleEntity;
}
