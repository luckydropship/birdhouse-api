import { Test, TestingModule } from '@nestjs/testing';
import { BirdhousesController } from './birdhouses.controller';

describe('BirdhousesController', () => {
  let controller: BirdhousesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BirdhousesController],
    }).compile();

    controller = module.get<BirdhousesController>(BirdhousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
