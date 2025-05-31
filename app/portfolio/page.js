"use client";

import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const IMGUR_API_URL = "https://api.imgur.com/3/album/t65QDBn/images";
const IMGUR_CLIENT_ID = "5aeed7fead99270";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    let retryCount = 0;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(IMGUR_API_URL, {
          headers: {
            Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
          },
        });

        if (response.status === 429 && retryCount < 3) {
          retryCount++;
          setTimeout(fetchImages, 1000 * retryCount);
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        if (result.data) {
          setImages(result.data);
        } else {
          throw new Error("No image data received");
        }
      } catch (err) {
        setError(err.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="relative py-20 min-h-screen bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/PVj0PKI.jpeg"
          alt="Portfolio Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-80 p-6">
          <div className="relative w-full max-w-5xl aspect-video">
            <img
              src={selectedImage.link}
              alt={selectedImage.title || "Selected Image"}
              className="w-full h-full object-cover rounded-3xl"
            />
       
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3 text-center rounded-b-3xl">
                {selectedImage.title || "No Title"}
              </div>
          
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4"
              aria-label="Close Modal"
            >
              <FaWindowClose color="white" size={32} />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-light text-center text-black mb-16 tracking-wide">
          PORTFOLIO
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <span className="text-gray-700 text-lg animate-pulse">
              Loading portfolio...
            </span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-32">
            <span className="text-red-500 text-lg">{error}</span>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group"
              >
                <img
                  src={image.link}
                  alt={image.title || "Portfolio Image"}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3 text-center">
                    {image.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-32">
            <span className="text-gray-700 text-lg">
              No images available in the portfolio.
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
