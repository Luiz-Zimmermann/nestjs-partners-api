import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EventsModule } from './events/events.module';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EventsModule, PrismaModule],
  controllers: [AppController, EventsController],
  providers: [AppService, EventsService],
})
export class AppModule {}
