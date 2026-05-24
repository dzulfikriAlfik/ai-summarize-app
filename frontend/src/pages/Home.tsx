import { useState } from "react";

import Button from "../components/Button";
import SummaryCard from "../components/SummaryCard";
import TextArea from "../components/TextArea";

import type { SummaryResponse } from "../types/summary";

import { summarizeText } from "../api/summarize";

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState<SummaryResponse | null>(null);

  const handleSummarize = async () => {
    try {
      setLoading(true);

      const result = await summarizeText(text);

      setSummary(result);
    } catch (error) {
      setError("Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        mx-auto
        flex
        min-h-screen
        max-w-4xl
        flex-col
        px-6
        py-12
      ">
      <h1 className="mb-2 text-4xl font-bold">Synoptiq</h1>

      <p className="mb-8 text-slate-400">
        AI-powered intelligent summarization
      </p>

      <TextArea value={text} onChange={setText} />

      <div className="mt-4">
        <Button text="Summarize" loading={loading} onClick={handleSummarize} />
      </div>

      {error && (
        <div
          className="
            mt-4
            rounded-lg
            border
            border-red-500/30
            bg-red-500/10
            p-4
            text-red-300
          ">
          {error}
        </div>
      )}

      {summary && <SummaryCard data={summary} />}
    </main>
  );
}
