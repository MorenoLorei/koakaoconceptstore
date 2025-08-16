import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
            {/* Background image */}
            <Image
                src="/image/koakao-bg.jpg"
                alt="Koakao Concept Store Mataram"
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Koakao Concept Store
                </h1>
                <p className="mb-6 text-lg md:text-xl text-gray-200">
                    Tropical streetwear from Mataram — feel the island vibe.
                </p>

                {/* Call to Action */}
                <a
                    href="/shop"
                    className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                >
                    Shop Now
                </a>

                {/* Trusted By */}
                <div className="mt-10">
                    <p className="text-sm uppercase tracking-widest text-gray-300">
                        Trusted By
                    </p>
                    <div className="flex justify-center gap-6 mt-4 flex-wrap">
                        <a href="https://3wdivegili.com/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/image-trusted/3W.png"
                                alt="3W DIVING LOGO"
                                width={40}
                                height={20}
                                className="bg-white/80 rounded-full"
                            />
                        </a>
                        <a href="https://www.instagram.com/bambu_cottages/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/image-trusted/bambucottage.jpg"
                                alt="BAMBU COTTAGE LOGO"
                                width={40}
                                height={20}
                                className="bg-white/80 rounded-full"
                            />
                        </a>
                        <a href="http://www.idoophotel.com/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/image-trusted/idoop.jpeg"
                                alt="HOTEL IDOOP LOGO"
                                width={40}
                                height={20}
                                className="bg-white/80 rounded-full"
                            />
                        </a>
                        <a href="https://www.favehotels.com/id/hotel/view/26/favehotel-langko" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/image-trusted/fave.png"
                                alt="HOTEL FAVE LOGO"
                                width={40}
                                height={20}
                                className="bg-white/80 rounded-full"
                            />
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
}