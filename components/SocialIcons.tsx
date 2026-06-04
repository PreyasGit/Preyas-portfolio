import { FaBehance, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const SOCIAL_PROFILE_URLS = {
  linkedin: "https://www.linkedin.com/in/preyas-mistry-1694ba259/",
  behance: "https://www.behance.net/preyasmistry",
} as const;

const iconClass =
  "h-5 w-5 sm:h-6 sm:w-6 text-zinc-900 dark:text-zinc-100";

const linkClass = cn(
  "flex h-11 w-11 items-center justify-center rounded-md sm:h-10 sm:w-10",
  "transition-opacity duration-200 hover:opacity-70",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2",
  "dark:focus-visible:ring-zinc-500"
);

const tooltipClass = cn(
  "pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap",
  "rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium tracking-wide text-zinc-600",
  "opacity-0 transition-all duration-200 group-hover:opacity-100",
  "dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
);

type SocialIconLinkProps = {
  href: string;
  label: "LinkedIn" | "Behance";
  children: React.ReactNode;
};

function SocialIconLink({ href, label, children }: SocialIconLinkProps) {
  return (
    <div className="group relative flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (opens in new tab)`}
        className={linkClass}
      >
        {children}
      </a>
      <span role="tooltip" className={tooltipClass}>
        {label}
      </span>
    </div>
  );
}

type SocialIconsProps = {
  className?: string;
};

export function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div
      className={cn("flex shrink-0 items-center gap-2 sm:gap-3", className)}
      role="group"
      aria-label="Social profiles"
    >
      <SocialIconLink href={SOCIAL_PROFILE_URLS.linkedin} label="LinkedIn">
        <FaLinkedin className={iconClass} aria-hidden />
      </SocialIconLink>
      <SocialIconLink href={SOCIAL_PROFILE_URLS.behance} label="Behance">
        <FaBehance className={iconClass} aria-hidden />
      </SocialIconLink>
    </div>
  );
}
