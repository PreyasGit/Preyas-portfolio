import Link from 'next/link';

export default function Options() {
  return (
    <div className="min-h-fit grid grid-cols-2 py-8">
      {/* Left Partition */}
      <div className="flex items-center justify-start pl-4 sm:pl-6 md:pl-10">
        <Link
          href="/app/artgallary"
          className="relative text-4xl sm:text-6xl md:text-8xl font-medium font-mono text-zinc-600 group"
        >
          <span className="absolute left-[-3rem] group-hover:opacity-100 opacity-0 text-2xl sm:text-3xl md:text-4xl">
            ᐊ
          </span>
          <span className="group-hover:translate-x-2 transition-transform duration-300">
            art
          </span>
        </Link>
      </div>

      {/* Right Partition */}
      <div className="flex items-center justify-end pr-4 sm:pr-6 md:pr-10">
        <Link
          href="/app/videogallary"
          className="relative text-4xl sm:text-6xl md:text-8xl font-medium font-mono text-zinc-600 group"
        >
          <span className="group-hover:translate-x-2 transition-transform duration-300">
            video
          </span>
          <span className="absolute right-[-3rem] group-hover:opacity-100 opacity-0 text-2xl sm:text-3xl md:text-4xl">
            ᐅ
          </span>
        </Link>
      </div>
    </div>
  );
}