"use client";
import { useEffect, useState } from "react";

const ALBUM_ID = "t65QDBn";
const CLIENT_ID = "5aeed7fead99270";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImgurAlbum = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Rate limit için delay ekle
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await fetch(
          `https://api.imgur.com/3/album/${ALBUM_ID}/images`,
          {
            headers: {
              "Authorization": `Client-ID ${CLIENT_ID}`,
            },
          }
        );

        if (response.status === 429) {
          // Rate limit hit - retry after delay
          console.log("Rate limit hit, retrying in 5 seconds...");
          await new Promise(resolve => setTimeout(resolve, 5000));
          return fetchImgurAlbum(); // Retry
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("API Response:", data);
        
        if (data.success && data.data) {
          setImages(data.data);
        } else {
          throw new Error("Invalid response format");
        }

      } catch (error) {
        console.error("Imgur fetch error:", error);
        if (error.message.includes('429')) {
          setError("Too many requests. Please wait a moment and refresh the page.");
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    // Component mount olduğunda hemen çağırma, biraz bekle
    const timer = setTimeout(fetchImgurAlbum, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-lg py-20">Loading portfolio...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-red-500 py-20">
            Error loading portfolio: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-light text-center mb-16 tracking-wide">
          PORTFOLIO
        </h1>
        
        {images.length === 0 ? (
          <div className="text-center text-lg py-20">No images found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, idx) => (
              <div
                key={image.id || idx}
                className="group relative overflow-hidden aspect-[3/4] bg-gray-100 rounded-lg shadow-lg"
              >
                <img
                  src={image.link}
                  alt={image.description || image.title || `Portfolio image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    console.error("Image load error:", image.link);
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg tracking-wide font-medium">
                    {image.description || image.title || "Untitled"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}