interface TextAreaProps {
  value: string
  onChange: (value: string) => void
}

export default function TextArea({
  value,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste your text here..."
      className="
        h-64
        w-full
        rounded-lg
        border
        border-slate-700
        bg-slate-900
        p-4
        text-white
        outline-none
        focus:border-blue-500
      "
    />
  )
}