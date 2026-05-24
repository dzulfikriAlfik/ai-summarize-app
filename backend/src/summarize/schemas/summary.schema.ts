import { z } from 'zod'

export const SummarySchema = z.object({
  summary: z.string(),
  keywords: z.array(z.string()),
  sentiment: z.enum([
    'Positive',
    'Neutral',
    'Negative',
  ]),
})