import type { Sentiment } from "./sentiment";

export interface SummaryResponse {
  summary: string;
  keywords: string[];
  sentiment: Sentiment;
}