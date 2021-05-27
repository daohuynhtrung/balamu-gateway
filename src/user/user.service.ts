import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return [
      {
        id: '1',
        name: 'Alice',
        email: 'alice@gmail.com',
      },
      {
        id: '2',
        name: 'Bob',
        email: 'bod@gmail.com',
      },
    ];
  }
}
