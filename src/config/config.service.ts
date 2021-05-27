import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: any };

  constructor() {
    this.envConfig = {};

    this.envConfig.port = process.env.API_GATEWAY_PORT;
  }
}
