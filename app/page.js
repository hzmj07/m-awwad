import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1920&q=80"
          alt="Sokak Fotoğrafçılığı"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl md:text-8xl font-light mb-6 tracking-tight">
        Muhammed Awwad 
        </h1>
        <p className="text-lg md:text-2xl mb-10 font-light tracking-wide">
          Sokak Fotoğrafçılığı | Kentsel yaşamın özünü lensimle yakalıyorum
        </p>
        <div className="flex flex-row gap-4">
          <Link
            href="/portfolio"
            className="inline-block bg-white text-black font-light px-8 py-4 text-lg tracking-wide hover:bg-gray-100 transition duration-300 no-underline"
          >
            Portfolyo
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-white text-white font-light px-8 py-4 text-lg tracking-wide hover:bg-white hover:text-black transition duration-300 no-underline"
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}