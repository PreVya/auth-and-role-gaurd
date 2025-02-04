import { Order } from "src/order/entities/order.entity";
import { User } from "src/user/entities/user.entity";
import { Entity } from "typeorm";

@Entity()
export class CreateProductDto {
    id:string;
    name:string;
    price:string;
    quantity:string;
    user:User;
    orders:Order[];
}
