import { useState } from 'react'

import Button from '../components/Button'
import SummaryCard from '../components/SummaryCard'
import TextArea from '../components/TextArea'

import type { SummaryResponse } from '../types/summary';

import { summarizeText } from '../api/summarize';

export default function Home() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<SummaryResponse | null>(null);

  const handleSummarize = async () => {
    try {
      setLoading(true)
  
      const result = await summarizeText(text)
  
      setSummary(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
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
      "
    >
      <h1 className="mb-2 text-4xl font-bold">
        Synoptiq
      </h1>

      <p className="mb-8 text-slate-400">
        AI-powered intelligent summarization
      </p>

      <TextArea
        value={text}
        onChange={setText}
      />

      <div className="mt-4">
        <Button
          text="Summarize"
          loading={loading}
          onClick={handleSummarize}
        />
      </div>

      {summary && (
        <SummaryCard data={summary} />
      )}
    </main>
  )
}