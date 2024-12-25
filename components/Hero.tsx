export default function Hero() {
  return (
    <section
      className="py-24 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('../images/doodle-light.png')`,
      }}
    >
      <div className="py-24">
        <h1 className="text-6xl font-semibold tracking-tighter text-zinc-800 dark:text-zinc-800 sm:text-5xl md:text-6xl">
          Preyas Mistry
        </h1>
        <p className="mt-4 text-2xl text-zinc-600 dark:text-zinc-600">
          Web Developer | Designer | Video Editor
        </p>
        <div className="mt-8 flex justify-center space-x-4"></div>
      </div>
    </section>
  );
}