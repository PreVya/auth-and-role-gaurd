import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
export abstract class BaseEntity{
    @CreateDateColumn()
    createdAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;
}