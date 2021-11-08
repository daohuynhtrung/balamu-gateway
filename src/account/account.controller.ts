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
import { CreateAccountDto } from './models/create-account.dto';
import { Account } from './models/account.model';
import { UpdateAccountDto } from './models/update-account.dto';

@Controller('accounts')
export class AccountController {
  constructor(@Inject('ACCOUNT_SERVICE') private client: ClientProxy) {}

  @Post()
  createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Observable<Account> {
    return this.client.send<Account>('createAccount', createAccountDto);
  }

  @Get()
  getAccounts(): Observable<Account[]> {
    return this.client.send<Account[]>('findAllAccounts', {});
  }

  @Get(':id')
  getAccount(@Param('id') id: string): Observable<Account> {
    return this.client.send<Account>('findOneAccount', id);
  }

  @Patch(':id')
  updateAccount(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Observable<Account> {
    if (!updateAccountDto.id) {
      updateAccountDto.id = id;
    }

    return this.client.send<Account>('updateAccount', updateAccountDto);
  }

  @Delete(':id')
  removeAccount(@Param('id') id: string) {
    return this.client.send<Account>('removeAccount', id);
  }
}
