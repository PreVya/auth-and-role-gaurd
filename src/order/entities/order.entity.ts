import { BaseEntity } from 'src/commons/entities/base.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';


@Entity()
export class Order extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.order)
  @JoinColumn()
  user: User; // Only users can place orders

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;
}
