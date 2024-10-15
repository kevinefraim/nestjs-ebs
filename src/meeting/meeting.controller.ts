import { Controller, Get, Param } from '@nestjs/common';
import { MeetingService } from './meeting.service';

@Controller('meetings')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Get()
  async listMeetings() {
    return this.meetingService.listMeetings();
  }

  @Get(':id')
  async getMeetingById(@Param('id') id: string) {
    return this.meetingService.getMeetingById(id);
  }
}
