import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { EmployeEntity } from './employe.entity';
@Entity('estabelecimentos')
export class EstablishmentEntity implements BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 14, unique: true })
    cnpj: string;

    @OneToMany(() => EmployeEntity, (employe) => employe.establishment)
    employes: EmployeEntity[];
}
