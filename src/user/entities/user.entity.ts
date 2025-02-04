import { type } from 'os';
import { BaseEntity } from 'src/commons/entities/base.entity';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, OneToOne } from 'typeorm';

export enum Role{
    user = 'user',
    vendor = 'vendor',
    admin = 'admin'
}
@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string; 
  @Column({ unique: true })
  firebaseUid: string; 

  @Column({ unique: true })
  email: string; 

  @Column({type:'enum',enum:Role, default: 'user' }) 
  role: Role; // admin, user, vendor

  @OneToMany(()=> Product,products => products.user)
  products:Product[];

  @OneToOne(()=>Order,order => order.user)
  order:Order;
}
