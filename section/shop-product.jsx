"use client";
import React, { useEffect, useState } from "react";
import ProductCardShop from "@/components/product-card-shop";

const Productshop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/productshoplist.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <section className="py-16" id="products">
            <div className="mx-auto px-4">
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <ProductCardShop
                            key={p.id}
                            id={p.id}
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
            </div>
        </section>
    );
};

export default Productshop;
