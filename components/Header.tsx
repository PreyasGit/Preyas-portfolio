import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-2 border-b bg-zinc-400 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center">
        <Link href="/">
          <p className="text-xs text-gray-500 dark:text-gray-400">portfolio</p>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Preyas Mistry
          </h1>
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
