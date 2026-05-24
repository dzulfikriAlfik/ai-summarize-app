interface ButtonProps {
  text: string;
  onClick: () => void;
  loading?: boolean;
}

export default function Button({
  text,
  onClick,
  loading
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        w-full
        rounded-lg
        bg-blue-600
        px-4
        py-3
        font-semibold
        transition
        hover:bg-blue-700
        disabled:opacity-50
      "
    >
      {loading ? "Loading..." : text}
    </button>
  )
}