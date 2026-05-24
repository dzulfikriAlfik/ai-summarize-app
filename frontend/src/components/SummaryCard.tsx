import type { SummaryResponse } from '../types/summary'

interface SummaryCardProps {
  data: SummaryResponse
}

export default function SummaryCard({
  data,
}: SummaryCardProps) {
  return (
    <div
      className="
        mt-6
        rounded-lg
        border
        border-slate-700
        bg-slate-900
        p-6
      "
    >
      <h2 className="mb-4 text-xl font-bold">
        Summary
      </h2>

      <p className="mb-6 leading-7 text-slate-300">
        {data.summary}
      </p>

      <div className="mb-4">
        <h3 className="mb-2 font-semibold">
          Keywords
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.keywords.map((keyword) => (
            <span
              key={keyword}
              className="
                rounded-full
                bg-blue-600/20
                px-3
                py-1
                text-sm
                text-blue-300
              "
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-semibold">
          Sentiment
        </h3>

        <p className="text-slate-300">
          {data.sentiment}
        </p>
      </div>
    </div>
  )
}