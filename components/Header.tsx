import Link from "next/link";
import { SocialIcons } from "./SocialIcons";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-2 border-b bg-zinc-400 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="min-w-0">
          <p className="text-xs text-gray-500 dark:text-gray-400">portfolio</p>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Preyas Mistry
          </h1>
        </Link>

        <div className="flex shrink-0 items-center">
          <SocialIcons />
          <div className="ml-3 flex items-center sm:ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
