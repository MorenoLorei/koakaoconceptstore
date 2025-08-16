import "./globals.css";
import { CartProvider } from "@/context/Cartcontext";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/Cartsidebar";

export const metadata = {
    title: {
        default: "Koakao Concept Store - Fashion & Gaya Hidup Premium",
        template: "%s | Koakao Concept Store",
    },
    description: "Temukan koleksi fashion unik dan produk gaya hidup di Koakao Concept Store. Pilihan produk berkualitas premium dengan desain minimalis.",
    keywords: [
        "toko koakao",
        "concept store indonesia",
        "fashion premium",
        "produk gaya hidup",
        "desain minimalis",
        "brand lokal indonesia"
    ],
    openGraph: {
        title: "Koakao Concept Store - Fashion & Gaya Hidup Premium",
        description: "Koleksi produk fashion dan gaya hidup berkualitas dengan desain istimewa",
        url: "https://koakaoconceptstore.netlify.app",
        siteName: "Koakao Concept Store",
        images: [
            {
                url: "icon.jpg",
                width: 1200,
                height: 630,
                alt: "Koakao Concept Store - Koleksi Terbaik",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Koakao Concept Store - Fashion & Gaya Hidup Premium",
        description: "Koleksi produk fashion dan gaya hidup berkualitas dengan desain istimewa",
        images: ["/images/koakao-bg.jpg"],
    },
    alternates: {
        canonical: "https://koakaostore.com",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
        <body>
        <CartProvider>
            {children}
            <CartSidebar />
            <Toaster position="top-center" />
        </CartProvider>
        </body>
        </html>
    );
}