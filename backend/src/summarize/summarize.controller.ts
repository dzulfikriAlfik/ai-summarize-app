import { Body, Controller, Post } from '@nestjs/common';

import { SummarizeService } from './summarize.service';
import { SummarizeDto } from './dto/summarize.dto';

@Controller('summarize')
export class SummarizeController {
  constructor(private readonly summarizeService: SummarizeService) {}

  @Post()
  async summarize(@Body() body: SummarizeDto) {
    return this.summarizeService.summarize(body.text);
  }
}
