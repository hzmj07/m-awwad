"use client";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selecetedImg, setselecetedImg] = useState("ss");
  const IMGUR_URL = "https://api.imgur.com/3/album/t65QDBn/images";
  const CLIENT_ID = "5aeed7fead99270";

  useEffect(() => {
    let retryCount = 0;
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(IMGUR_URL, {
          method: "GET",
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`,
          },
        });

        if (res.status === 429 && retryCount < 3) {
          retryCount++;
          setTimeout(fetchImages, 1000 * retryCount);
          return;
        }

        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        if (data.data) setImages(data.data);
        else throw new Error("No image data found");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="relative py-20 min-h-screen bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/PVj0PKI.jpeg"
          alt="Sokak Fotoğrafçılığı"
          className="w-full h-full object-cover object-center bg-white opacity-40"
        />
      </div>
      {selecetedImg && (
        <div className="absolute inset-0 z-100 flex w-full h-full p-6 items-center justify-center bg-black/80">
          <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
            <img
              src={selecetedImg.link}
              alt="Selected"
              className="w-full h-full object-cover object-center rounded-3xl"
            />
            <button
              className="absolute top-4 right-4 justify-center items-center flex text-black rounded-full"
              onClick={() => setselecetedImg(null)}
            >
              <FaWindowClose color="white" size={32} />
            </button>
          </div>
        </div>
      )}
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-4xl font-light text-center mb-16 tracking-wide text-black">
          PORTFOLIO
        </h1>
        {loading ? (
          <div className="flex items-center justify-center py-32 w-full">
            <span className="text-lg text-gray-700 animate-pulse">
              Loading portfolio...
            </span>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-32 w-full">
            <span className="text-red-500 text-lg">{error}</span>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {images.map((image) => (
              <div
                onClick={() => setselecetedImg(image)}
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
            <span className="text-lg text-gray-700">
              No images found in the portfolio.
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
