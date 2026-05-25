import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private client: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: this.configService.get<string>('openaiApiKey'),
    });
  }

  async summarize(text: string) {
    const response = await this.client.chat.completions.create({
      model: 'gpt-4.1-mini',
      temperature: 0.2,
      response_format: {
        type: 'json_object',
      },
      messages: [
        {
          role: 'system',
          content: `
            You are a professional AI text analysis assistant.
            
            Your responsibilities:
            - Generate concise summaries
            - Extract important keywords
            - Detect sentiment accurately
            
            Rules:
            - Always return valid JSON
            - Never return markdown
            - Never include explanations
            - Keep summaries concise and clear
            - Keywords must be short phrases
            - Sentiment must be one of:
              Positive
              Neutral
              Negative
            `,
        },
        {
          role: 'user',
          content: `
              Analyze and summarize the following text.
              
              Text:
              ${text}
              
              Required JSON format:
              {
                "summary": "string",
                "keywords": ["string"],
                "sentiment": "Positive | Neutral | Negative"
              }
            `,
        },
      ],
    });

    return response.choices[0].message.content;
  }
}
