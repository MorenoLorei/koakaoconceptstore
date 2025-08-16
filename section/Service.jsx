"use client"
import { useEffect, useState } from "react";

// Define icons by key
const icons = {
    bag: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h4l2 3h6l2-3h4a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
        </svg>
    ),
    shield: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" />
        </svg>
    ),
    sparkle: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m2-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
    )
};

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/data/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Failed to load services:", err));
    }, []);

    return (
        <section className="py-16" id="layanan">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">LAYANAN KAMI</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:border-yellow-400 transition-all"
                        >
                            <div className="mb-4 flex justify-center">
                                {icons[service.icon] || null}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;