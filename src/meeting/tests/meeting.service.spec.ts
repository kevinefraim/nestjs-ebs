import { Test, TestingModule } from '@nestjs/testing';
import { MeetingService } from '../meeting.service';

describe('MeetingService', () => {
  let service: MeetingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingService],
    }).compile();

    service = module.get<MeetingService>(MeetingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of meetings', async () => {
    const meetings = await service.listMeetings();
    expect(meetings).toBeInstanceOf(Array);
    expect(meetings.length).toBeGreaterThan(0);
  });

  it('should return a meeting by ID', async () => {
    const meeting = await service.getMeetingById('1');
    expect(meeting).toBeDefined();
    expect(meeting.id).toBe('1');
  });

  it('should return undefined for a non-existing meeting ID', async () => {
    const meeting = await service.getMeetingById('non-existing-id');
    expect(meeting).toBeUndefined();
  });
});
