import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [PrismaModule, MeetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
