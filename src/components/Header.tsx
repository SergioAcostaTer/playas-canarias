import Link from "next/link";

const Header = () => {
  return (
    <header className="text-center p-4 h-14 flex items-center justify-center border-b border-[var(--header-border)] absolute top-0 left-0 right-0 bg-white z-10">
      <Link href="/">
        <h1 className="text-lg md:text-xl font-bold">Playas Canarias</h1>
      </Link>
    </header>
  );
};

export { Header };
