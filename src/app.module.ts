import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ConfigService } from './config/config.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, ConfigService],
})
export class AppModule {}
