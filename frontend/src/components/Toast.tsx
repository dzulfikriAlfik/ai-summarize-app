interface ToastProps {
  message: string
}

export default function Toast({
  message,
}: ToastProps) {
  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-50
        rounded-lg
        border
        border-green-700
        bg-green-900
        px-4
        py-3
        text-sm
        text-white
        shadow-lg
      "
    >
      {message}
    </div>
  )
}