import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Meeting, MeetingUser } from '@prisma/client';
import { Twilio } from 'twilio';

const MEETINGS = [
  {
    id: '1',
    name: 'Daily Standup',
    date: new Date(),
    users: [
      {
        id: '1',
        name: 'Alice',
      },
      {
        id: '2',
        name: 'Bob',
      },
    ],
  },
  {
    id: '2',
    name: 'Sprint Planning',
    date: new Date(),
    users: [
      {
        id: '1',
        name: 'Alice',
      },
      {
        id: '3',
        name: 'Charlie',
      },
    ],
  },
];

@Injectable()
export class MeetingService {
  async listMeetings() {
    return MEETINGS;
  }

  async getMeetingById(id: string) {
    return MEETINGS.find((meeting) => meeting.id === id);
  }
}
