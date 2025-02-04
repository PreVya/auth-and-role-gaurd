import { Entity } from "typeorm";
import { Role } from "../entities/user.entity";
import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";

@Entity()
export class CreateUserDto {
    id:string;
    firebaseUid:string;
    email:string;
    role:Role;
    order:Order;
    products:Product[];
}
