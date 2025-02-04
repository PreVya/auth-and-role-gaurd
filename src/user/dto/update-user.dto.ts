import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Role } from '../entities/user.entity';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id?:string;
    firebaseUid?:string;
    email?:string;
    role?:Role;
    order?:Order;
    products?:Product[];
}
