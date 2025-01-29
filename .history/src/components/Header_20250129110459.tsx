import Link from "next/link";

const Header = () => {
  return (
    <header className="text-center p-4 h-14 md:h-20 bg-[var(--header-bg)] text-[var(--header-text)]">
      <Link href="/">
        <a className="text-lg md:text-xl font-bold">Playas Canarias</a>
        </Link>
    </header>
  );
};

export { Header };
