type Logo = { name: string; src: string };

export function LogoWall({ logos }: { logos: Logo[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-24 items-center justify-center rounded-lg bg-white p-6 ring-1 ring-black/5 transition-shadow hover:shadow-md"
        >
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            className="max-h-12 max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
