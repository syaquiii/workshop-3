import Link from "next/link";

export default function Home() {
  return (
    <section className="flex font-poppins  justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl text text font-bold">
          Selamat Datang Di Workshop 3
        </h1>
        <div className="space-x-4   mt-10 font-semibold">
          <Link className="hover:border-b-2 transition-all duration-75" href={"/home"}>
            Home
          </Link>
          <Link className="hover:border-b-2 transition-all duration-75" href={"/products"}>Products</Link>
        </div>
      </div>
    </section>
  );
}
