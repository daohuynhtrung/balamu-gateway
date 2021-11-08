import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'balamu-accounts',
          port: 3008,
        },
      },
    ]),
  ],
  controllers: [AccountController],
  providers: [],
})
export class AccountModule {}
