import brandIcon from "@/assets/eagletv-logo.webp";
import brandEagleLarge from "@/assets/eagletv-eagle-lg.webp";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

/** Águia oficial em tamanho grande (seções). Para trocar, substitua o arquivo em src/assets. */
export function EagleMark({ className, eager = false }: { className?: string; eager?: boolean }) {
  return (
    <img
      src={brandEagleLarge}
      alt=""
      aria-hidden="true"
      width={416}
      height={416}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-11 w-11 shrink-0 object-contain", className)}
    />
  );
}

/** Ícone oficial da marca (águia neon). Para trocar, substitua o arquivo em src/assets. */
export function BrandIcon({ className }: { className?: string }) {
  return (
    <img
      src={brandIcon}
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