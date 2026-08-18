/** The "1is4me" wordmark — "1" and "4" carry the mint, as on the IG profile. */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-lg font-extrabold tracking-tight text-ink ${className}`}
    >
      <span className="text-mint">1</span>is
      <span className="text-mint">4</span>me
    </span>
  );
}
