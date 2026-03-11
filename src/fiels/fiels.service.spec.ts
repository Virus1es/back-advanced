import { Test, TestingModule } from '@nestjs/testing';
import { FielsService } from './fiels.service';

describe('FielsService', () => {
  let service: FielsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FielsService],
    }).compile();

    service = module.get<FielsService>(FielsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
