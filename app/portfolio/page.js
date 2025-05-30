"use client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "/api/portfolio";

  useEffect(() => {
    let retryCount = 0;
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(API_URL);
        if (res.status === 429 && retryCount < 3) {
          retryCount++;
          setTimeout(fetchImages, 1000 * retryCount);
          return;
        }
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        if (data.data) setImages(data.data);
        else throw new Error(data.error || "No data");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="relative py-20 min-h-screen bg-white">
      {/* Background */}
     <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1920&q=80"
          alt="Sokak Fotoğrafçılığı"
          className="w-full h-full object-cover object-center bg-white opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-4xl font-light text-center mb-16 tracking-wide text-black">
          PORTFOLIO
        </h1>
        {loading ? (
          <div className="flex items-center justify-center py-32 w-full">
            <span className="text-lg text-gray-700 animate-pulse">Loading portfolio...</span>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-32 w-full">
            <span className="text-red-500 text-lg">{error}</span>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image.link}
                  alt={image.title || "Portfolio Image"}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-3 text-center">
                    {image.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-32 w-full">
            <span className="text-lg text-gray-700">No images found in the portfolio.</span>
          </div>
        )}
      </div>
    </section>
  );
}