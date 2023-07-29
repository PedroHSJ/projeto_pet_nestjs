import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { ClientEntity } from './client.entity';

@Entity('pets')
export class PetEntity implements BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'float' })
    weight: number;

    @Column({ type: 'timestamp', name: 'date_of_birth' })
    dateOfBirth: Date;

    @ManyToOne(() => ClientEntity, (client) => client.pets)
    @JoinColumn({ name: 'client_id' })
    client: ClientEntity;
}
