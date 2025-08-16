"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product-card.jsx";
import PrimaryButton from "@/components/btn-prima";
import Link from "next/link";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/product.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <section className="py-16"id="products">
            <div className="mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 tracking-tight text-center">PRODUK KOAKAO</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            imageUrl={p.imageUrl}
                            name={p.name}
                            description={p.description}
                            price={p.price}
                            badge={p.badge}
                            badgeColor={p.badgeColor}
                            showButton={true}
                        />
                    ))}

                </div>
                <div className="flex justify-center mt-8">
                    <Link href="/shop">
                        <PrimaryButton>Lihat Semua</PrimaryButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Product;