import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { User } from 'src/user/entities/user.entity';
import { Order } from 'src/order/entities/order.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    id?:string;
    name?:string;
    price?:string;
    quantity?:string;
    user?:User;
    orders?:Order[];
}
