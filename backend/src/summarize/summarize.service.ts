import { Injectable } from '@nestjs/common';
import { OpenaiService } from 'src/openai/openai.service';
import { SummarySchema } from './schemas/summary.schema';

@Injectable()
export class SummarizeService {
  constructor(private readonly openaiService: OpenaiService) {}

  async summarize(text: string) {
    const result = await this.openaiService.summarize(text);

    const parsed = JSON.parse(result || '{}');

    return SummarySchema.parse(parsed);
  }
}
