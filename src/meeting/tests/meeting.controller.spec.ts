import { Test, TestingModule } from '@nestjs/testing';
import { MeetingController } from '../meeting.controller';
import { MeetingService } from '../meeting.service';

describe('MeetingController', () => {
  let controller: MeetingController;
  let service: MeetingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetingController],
      providers: [
        {
          provide: MeetingService,
          useValue: {
            listMeetings: jest.fn().mockResolvedValue([
              { id: '1', name: 'Daily Standup' },
              { id: '2', name: 'Sprint Planning' },
            ]),
            getMeetingById: jest
              .fn()
              .mockImplementation((id: string) =>
                id === '1' ? { id: '1', name: 'Daily Standup' } : undefined,
              ),
          },
        },
      ],
    }).compile();

    controller = module.get<MeetingController>(MeetingController);
    service = module.get<MeetingService>(MeetingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a list of meetings', async () => {
    const meetings = await controller.listMeetings();
    expect(meetings).toBeInstanceOf(Array);
    expect(meetings.length).toBe(2);
    expect(service.listMeetings).toHaveBeenCalled();
  });

  it('should return a meeting by ID', async () => {
    const meeting = await controller.getMeetingById('1');
    expect(meeting).toBeDefined();
    expect(meeting.id).toBe('1');
    expect(service.getMeetingById).toHaveBeenCalledWith('1');
  });

  it('should return undefined for a non-existing meeting ID', async () => {
    const meeting = await controller.getMeetingById('non-existing-id');
    expect(meeting).toBeUndefined();
  });
});
