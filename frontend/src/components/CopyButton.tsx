interface CopyButtonProps {
  text: string;
  onCopied?: () => void;
}

export default function CopyButton({ text, onCopied }: CopyButtonProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);

    if (typeof onCopied === "function") {
      onCopied();
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="
        rounded-lg
        bg-slate-800
        px-3
        py-2
        text-sm
        transition
        hover:bg-slate-700
      ">
      Copy Summary
    </button>
  );
}
