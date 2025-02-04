import { BaseEntity } from 'src/commons/entities/base.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

// Only Admins & Vendors can create products
@Entity()
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  quantity:String;

  @ManyToOne(() => User, (user) => user.products)
  user: User; 

  @OneToMany(()=>Order,orders => orders.product)
  orders:Order[];
}
