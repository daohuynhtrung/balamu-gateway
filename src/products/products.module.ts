import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {
  ClientsModule,
  ClientProxy,
  ClientProxyFactory,
  Transport
} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCTS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'products-rabbitmq',
          port: 3009
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: []
})
export class ProductsModule {}
