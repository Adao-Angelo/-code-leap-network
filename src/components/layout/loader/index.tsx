type SpinnerVariant = "default" | "mini" | "white-mini";

interface LoaderProps {
  variant?: SpinnerVariant;
  className?: string;
}

export default function Loader({
  variant = "default",
  className = "",
}: LoaderProps) {
  const spinnerClass =
    variant === "mini"
      ? "mini-spinner"
      : variant === "white-mini"
        ? "white-mini-spinner"
        : "spinner";
  return (
    <div
      className={`${spinnerClass} ${className}`}
      aria-label="Carregando..."
      role="status"
    />
  );
}
