import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { User } from './user/entities/user.entity';
import { Order } from './order/entities/order.entity';
import { Product } from './product/entities/product.entity';

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      url:`${process.env.DB_CONNECTION}`,
      entities:[User,Order,Product],
      synchronize:true
    }),
    UserModule, OrderModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
