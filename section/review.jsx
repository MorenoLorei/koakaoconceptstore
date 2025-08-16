"use client"
import { useEffect, useState } from "react";

const StarRating = ({ count }) => (
    <div className="flex mb-3" aria-label={`${count} dari 5 bintang`}>
        {Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < count ? "text-amber-500" : "text-gray-200"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.14 3.5h3.684c.969 0 1.371 1.24.588 1.81l-2.98 2.165 1.14 3.5c.3.921-.755 1.688-1.54 1.117L10 13.347l-2.98 2.165c-.785.571-1.84-.196-1.54-1.117l1.14-3.5-2.98-2.165c-.783-.57-.38-1.81.588-1.81h3.684l1.14-3.5z" />
            </svg>
        ))}
    </div>
);

const Review = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Example data if fetch fails
        const defaultTestimonials = [
            {
                name: "Kiki Rizki Amalia",
                role: "Local Guide",
                rating: 5,
                quote: "Kaosnya berkualitas, motif khas Lombok. Pelayanan ramah dan harga terjangkau!",
                image: ""
            },
            {
                name: "Budi Santoso",
                role: "Pelanggan",
                rating: 5,
                quote: "Bahan nyaman dipakai, desain unik. Sudah beli 3 kali!",
                image: ""
            },
            {
                name: "Siti Aisyah",
                role: "Wisatawan",
                rating: 4,
                quote: "Tas tenunnya cantik, cocok untuk oleh-oleh keluarga.",
                image: ""
            }
        ];

        fetch("data/review.json")
            .then((res) => res.json())
            .then((data) => setTestimonials(data.length ? data : defaultTestimonials))
            .catch(() => setTestimonials(defaultTestimonials))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <section className="px-6 py-16 sm:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">ULASAN PELANGGAN</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse h-64" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="px-6 py-16 sm:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">ULASAN PELANGGAN</h2>
                    <p className="text-gray-600">Ditinjau oleh <span className="text-amber-600">1.000+ pembeli</span> • ★★★★★ (4.9/5)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-amber-100 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 ring-2 ring-amber-100 group-hover:ring-amber-200 transition-all">
                                    {t.image ? (
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-medium">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>

                            <StarRating count={t.rating} />

                            <blockquote className="text-gray-600 mt-3 leading-relaxed italic">
                                "{t.quote}"
                            </blockquote>

                            {index === 1 && (
                                <div className="mt-4 flex items-center text-sm text-amber-600">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Ulasan Terbaru</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;