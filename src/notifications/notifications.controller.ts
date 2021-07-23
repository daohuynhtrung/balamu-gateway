import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateNotificationDto } from './models/create-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private NotificationsServiceclient: ClientProxy,
  ) { }

  @Post()
  async createNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.NotificationsServiceclient.emit<number>('notification_created', createNotificationDto);
  }
}
