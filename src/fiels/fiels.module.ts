import { Module } from '@nestjs/common';
import { FielsService } from './fiels.service';

@Module({
  providers: [FielsService]
})
export class FielsModule {}
