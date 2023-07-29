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
import { EstablishmentEntity } from './establishment.entity';
import { Exclude, Expose } from 'class-transformer';
import { PetEntity } from './pet.entity';
import { Role } from 'src/app/enums/role.enum';
import { RoleDTO } from 'src/app/dto/role.dto';
import { EstablishmentDTO } from 'src/app/dto/establishment.dto';

@Entity('usuarios')
export class EmployeEntity implements BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column({ type: 'varchar', length: 64, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 64 })
    password: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'bit', default: 1 })
    active: number;

    @ManyToOne(() => EstablishmentEntity, { nullable: true })
    establishment: EstablishmentEntity;

    @ManyToOne(() => RoleEntity, (role) => role.employes)
    @JoinColumn({ name: 'role_id' })
    role: RoleEntity;

    // @OneToMany(() => PetEntity, (pet) => pet.usuario)
    // pets: PetEntity[];
}
