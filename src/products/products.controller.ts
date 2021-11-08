import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(@Inject('PRODUCTS_SERVICE') private client: ClientProxy) {}

  @Post()
  createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Observable<Product> {
    return this.client.send<Product>('createProduct', createProductDto);
  }

  @Get()
  getProducts(): Observable<Product[]> {
    return this.client.send<Product[]>('findAllProducts', {});
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Observable<Product> {
    return this.client.send<Product>('findOneProduct', id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Observable<Product> {
    if (!updateProductDto.id) {
      updateProductDto.id = id;
    }
    return this.client.send<Product>('updateProduct', updateProductDto);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.client.send<Product>('removeProduct', id);
  }
}
