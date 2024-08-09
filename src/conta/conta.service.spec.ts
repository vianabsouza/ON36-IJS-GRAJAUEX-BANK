import { Test, TestingModule } from '@nestjs/testing';
import { ContaService } from './conta.service';
import { ContaFactory } from './factories/conta.factory';

describe('ContaService', () => {
  let service: ContaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContaService, ContaFactory],
    }).compile();

    service = module.get<ContaService>(ContaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
