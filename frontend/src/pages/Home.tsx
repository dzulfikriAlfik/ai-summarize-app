import { useState } from "react";

import Button from "../components/Button";
import SummaryCard from "../components/SummaryCard";
import TextArea from "../components/TextArea";

import type { SummaryResponse } from "../types/summary";

import { summarizeText } from "../api/summarize";
import Toast from "../components/Toast";

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState('');
  const [summary, setSummary] = useState<SummaryResponse | null>(null);

  const onChangeText = (value: string): void => {
    setText(value);
    setError("");
  }

  const handleSummarize = async () => {
    if (!text.trim()) {
      setError(
        'Please enter text to summarize.',
      )
    
      return
    }

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

  const handleCopied = () => {
    setToast('Summary copied to clipboard')
  
    setTimeout(() => {
      setToast('')
    }, 2500)
  }

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

      <TextArea value={text} onChange={onChangeText} />

      <div className="mt-4">
        <Button
          text="Summarize"
          loading={loading}
          onClick={handleSummarize}
          disabled={!text.trim()}
        />
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
            relative
          ">
          {error}
          <button
            className="
              absolute
              top-1
              right-3
              text-red-300
              font-semibold
              cursor-pointer
            "
            onClick={() => setError("")}
          >x</button>
        </div>
      )}

      {loading && (
        <div
          className="
            mt-6
            animate-pulse
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-6
          "
        >
          <p className="text-slate-400">
            Synoptiq is analyzing your text...
          </p>
        </div>
      )}

      {summary && <SummaryCard data={summary} onCopied={handleCopied} />}

      {toast && (
        <Toast message={toast} />
      )}
    </main>
  );
}
