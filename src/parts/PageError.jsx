/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function PageError({
  title = "404 NOT FOUND",
  body = "Golet Apa Koe",
}) {
  return (
    <section className="mt-40">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            <p className="text-2xl mb-12">{body}</p>
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Wis Balik Bae
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
