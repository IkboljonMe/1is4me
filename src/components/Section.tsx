import Reveal from "./Reveal";

/** Section shell: eyebrow tag, title, lead — the repeated header rhythm. */
export function SectionHead({
  tag,
  title,
  lead,
  align = "left",
}: {
  tag: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <Reveal className={center ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-mint/50" />
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mint">
          {tag}
        </span>
      </div>
      <h2 className="mt-5 text-3xl font-black leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`layer scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
