import NavBar from "@/components/NavBar";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="relative mt-20">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Borgi Phones
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                Repair Shop.{" "}
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Borgi Phones is one of the best phone repairing shops in tunisia
              this is a platform for managing customers tickets
            </p>
            <address className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Rue Gp1 ,Khzema ouest <br />
              4051 Sousse
            </address>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Open Daily : 10 AM to 12PM
            </p>
            <Link
              href="+216 20 121 922"
              className="hover:underline max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg"
            >
              +216 20 121 922
            </Link>

            <div className="mt-6 text-center md:ml-6">
              <Link
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="/login"
              >
                <span className="flex justify-center">See a Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
