import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import {
  ClientsModule,
  ClientProxy,
  ClientProxyFactory,
  Transport
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'accounts-rabbitmq',
          port: 3008
        },
      },
    ]),
  ],
  controllers: [AccountController],
  providers: [],
})
export class AccountModule { }
