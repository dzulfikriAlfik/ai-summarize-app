import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';
import { SummarySchema } from './schemas/summary.schema';

@Injectable()
export class SummarizeService {
  constructor(private readonly openaiService: OpenaiService) {}

  async summarize(text: string) {
    try {
      const result = await this.openaiService.summarize(text);

      if (!result) {
        throw new Error('Empty AI response');
      }

      let parsed: unknown;

      try {
        parsed = JSON.parse(result);
      } catch {
        throw new BadRequestException('Invalid AI JSON response');
      }

      return SummarySchema.parse(parsed);
    } catch (error) {
      console.error(error);

      throw new InternalServerErrorException('Failed to summarize text');
    }
  }
}
