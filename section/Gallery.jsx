import Image from 'next/image';

const GallerySection = () => {
    const images = [
        { src: "/image/koakaoscenery1.jpg", width: 800, height: 600 },
        { src: "/image/koakaoscenery2.jpg", width: 800, height: 600 },
        { src: "/image/koakaoscenery3.jpg", width: 800, height: 600 },
        { src: "/image/koakaoscenery4.jpg", width: 800, height: 600 },
        { src: "/image/koakaoscenery5.jpg", width: 800, height: 600 },
        { src: "/image/koakaoscenery6.jpg", width: 800, height: 600 }
    ];

    return (
        <section className="px-6 py-20 bg-gray-50" id="gallery">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 md:text-4xl">Galeri KOAKAO</h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto md:text-lg">
                    Lihat lihat apa aja di dalam toko koakao.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className="group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative aspect-[3/3] overflow-hidden object-cover object-center">
                                <Image
                                    src={image.src}
                                    alt={`Gallery ${i + 1}`}
                                    width={image.width}
                                    height={image.height}
                                    quality={100}
                                    priority={i < 3} // Only first 3 images get priority loading
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className=" group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;