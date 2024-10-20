import { Test, TestingModule } from '@nestjs/testing';
import { ButtonsController } from './buttons.controller';
import { ButtonsService } from './buttons.service';

describe('ButtonsController', () => {
  let controller: ButtonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ButtonsController],
      providers: [ButtonsService],
    }).compile();

    controller = module.get<ButtonsController>(ButtonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
