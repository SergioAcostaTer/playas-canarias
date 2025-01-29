import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Hello, world!</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={283}
        height={64}
        className="mx-auto"
      />

    </div>
  );
}
