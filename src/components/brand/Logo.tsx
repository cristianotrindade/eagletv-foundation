import brandIcon from "@/assets/eagletv-logo.webp.asset.json";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function EagleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 42"
      role="img"
      aria-label="Símbolo da EagleTV: águia geométrica"
      className={cn("h-9 w-11 shrink-0", className)}
    >
      <path className="fill-primary" d="M2 7.5 22.5 17 15 24 2 18l8.5-2.2L2 7.5Z" />
      <path className="fill-brand-electric" d="m50 7.5-20.5 9.4L37 24l13-6-8.5-2.2L50 7.5Z" />
      <path className="fill-foreground" d="m26 11 8.2 8.5L26 38l-8.2-18.5L26 11Z" />
      <path className="fill-background" d="m26 20 3.4 3.4L26 31l-3.4-7.6L26 20Z" />
      <path className="fill-primary" d="m26 2 6 8-6-2.5L20 10l6-8Z" />
    </svg>
  );
}

/** Ícone oficial da marca (águia neon). Para trocar, substitua o arquivo em src/assets. */
export function BrandIcon({ className }: { className?: string }) {
  return (
    <img
      src={brandIcon.url}
      alt=""
      aria-hidden="true"
      width={44}
      height={44}
      decoding="async"
      className={cn("h-11 w-11 shrink-0 object-contain", className)}
    />
  );
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <a href="#inicio" className={cn("inline-flex items-center gap-2", className)} aria-label="EagleTV — início">
      <BrandIcon />
      {!compact && (
        <span className="font-display text-xl font-extrabold tracking-[0.08em] text-foreground">
          EAGLE<span className="text-primary">TV</span>
        </span>
      )}
    </a>
  );
}