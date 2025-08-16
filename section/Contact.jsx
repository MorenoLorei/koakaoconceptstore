const ContactSection = () => {
    return (
        <section id="contact" className="bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
                <p className="text-gray-600 mb-8">Ada pertanyaan atau ingin bekerja sama? Silakan hubungi kami melalui form atau kunjungi lokasi kami.</p>

                <div className="text-sm text-gray-700 space-y-1 mb-10">
                    <p><strong>📍 Alamat:</strong> Jl. kesehatan 1 nomor 2 dan 4</p>
                    <p><strong>📧 Email:</strong>konveksilombok12@gmail.com</p>
                    <p><strong>📞 Telepon:</strong> +62 815 2940 8733</p>
                </div>

                <div className="mb-10 w-full">
                    <iframe
                        title="Koakao Concept Store Map"
                        src="https://maps.google.com/maps?hl=en&amp;q=KoaKao%20Concept%20Store%20Jl.%20Kesehatan%20No.1%20-%204,%20Pejanggik,%20Kec.%20Mataram,%20Kota%20Mataram,%20Nusa%20Tenggara%20Bar%20mataram&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <form className="space-y-4 text-left">
                    <input
                        type="text"
                        placeholder="Nama"
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                    />
                    <textarea
                        rows="4"
                        placeholder="Pesan"
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded hover:opacity-90 w-full"
                    >
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;