export default function Portfolio() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
      alt: "Urban Life"
    },
    {
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
      alt: "City Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80",
      alt: "Street Portraits"
    },
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      alt: "Urban Details"
    },
    {
      src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80",
      alt: "City Moments"
    },
    {
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
      alt: "Street Stories"
    }
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-light text-center mb-16 tracking-wide">PORTFOLIO</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-[3/4]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg tracking-wide">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 