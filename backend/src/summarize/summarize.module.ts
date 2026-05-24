import { Module } from '@nestjs/common';
import { SummarizeController } from './summarize.controller';
import { SummarizeService } from './summarize.service';
import { OpenaiModule } from '../openai/openai.module'

@Module({
  imports: [OpenaiModule],
  controllers: [SummarizeController],
  providers: [SummarizeService]
})
export class SummarizeModule {}
