import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen  overflow-hidden">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/PVj0PKI.jpeg"
          alt="Sokak Fotoğrafçılığı"
          className="w-full h-full object-cover object-center bg-white opacity-40"
        />
        {/* Hafif beyaz overlay */}
      </div>

      {/* İçerik */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-gray-900 text-center px-6">
        <h1 className="text-5xl md:text-8xl font-light mb-6 tracking-tight">
          Muhammed Awwad
        </h1>
        <p className="text-lg md:text-2xl mb-10 font-light tracking-wide">
         Street Photography | I capture the essence of urban life with my lens
        </p>
        <div className="flex flex-row gap-4">
          <Link
            href="/portfolio"
            className="inline-block bg-black text-white font-light px-8 py-4 text-lg tracking-wide hover:bg-gray-900 hover:text-white transition duration-300 no-underline rounded-xl"
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-black text-black font-light px-8 py-4 text-lg tracking-wide hover:bg-black hover:text-white transition duration-300 no-underline rounded-xl"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}