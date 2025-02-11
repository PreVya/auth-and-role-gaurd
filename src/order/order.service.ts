import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository:Repository<Order>
  ){}
  async create(createOrderDto: CreateOrderDto) {
    const user = await this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(user);
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: string) {
    return await this.orderRepository.findOne({where:{id}});
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const user = await this.orderRepository.update(id,updateOrderDto);
    return this.orderRepository.findOne({where:{id}});
  }

  async remove(id: string) {
    const user = await this.orderRepository.findOne({where:{id}});
    if(user){
      this.orderRepository.softDelete(id);
    }
    return `This action removes a #${id} order`;
  }
}
