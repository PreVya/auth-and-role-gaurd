import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository : Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto) {
    const user = await this.productRepository.create(createProductDto);
    return this.productRepository.save(user);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    return await this.productRepository.findOne({where:{id}});
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const user = await this.productRepository.update(id,updateProductDto);
    return this.productRepository.findOne({where:{id}});
  }

  async remove(id: string) {
    const user = await this.productRepository.findOne({where:{id}});
    if(user){
      this.productRepository.softDelete(id);
    }
    return `This action removes a #${id} product`;
  }
}
