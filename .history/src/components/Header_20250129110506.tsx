import Link from "next/link";

const Header = () => {
  return (
    <header className="text-center p-4 h-14 md:h-20 bg-[var(--header-bg)] text-[var(--header-text)]">
      <Link href="/">
        <h1 className="text-lg md:text-xl font-bold">Playas Canarias</h1>
      </Link>
    </header>
  );
};

export { Header };
