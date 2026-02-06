export default function GalleryPage() {
  const images = [
    "/gallery/gallery-1.webp",
    "/gallery/gallery-2.webp",
    "/gallery/gallery-3.JPG",
    "/gallery/gallery-4.jpg",
    "/gallery/gallery-5.jpg",
    "/gallery/gallery-6.jpg",
    "/gallery/gallery-7.jpeg",
    "/gallery/gallery-8.jpeg",
    "/gallery/gallery-9.jpeg",
    "/gallery/gallery-10.jpeg",
    "/gallery/gallery-11.jpeg",
    "/gallery/gallery-12.jpeg",
    "/gallery/gallery-13.jpeg",
    "/gallery/gallery-14.jpeg",
    "/gallery/gallery-15.jpeg",
    "/gallery/gallery-16.jpeg",
    "/gallery/gallery-17.jpeg",
    "/gallery/gallery-18.jpeg",
    "/gallery/gallery-19.jpeg",
  ];

  return (
    <section className="min-h-screen bg-[#eef9fa] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-4">
        {/* Masonry layout */}
        <div className="mt-15 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid w-100 h-50 overflow-hidden rounded-md bg-white"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
