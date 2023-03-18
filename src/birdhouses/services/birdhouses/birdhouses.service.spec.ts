import { Test, TestingModule } from '@nestjs/testing';
import { BirdhousesService } from './birdhouses.service';

describe('BirdhousesService', () => {
  let service: BirdhousesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirdhousesService],
    }).compile();

    service = module.get<BirdhousesService>(BirdhousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
