import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center max-w-6xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-full sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Borgi Phones Repair Shop</h1>
          <address>
            Rue Gp1 ,Khzema ouest <br />
            4051 Sousse
          </address>
          <p>Open Daily : 10 AM to 12PM</p>
          <Link href="+216 20 121 922" className="hover:underline">
            +216 20 121 922
          </Link>
        </div>
      </main>
    </div>
  );
}
