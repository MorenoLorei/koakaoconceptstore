"use client";
import { useCart } from "../context/Cartcontext";

export default function Cartnav() {
    const { cartCount, toggleCart } = useCart();

    return (
        <nav className="bg-[#060606] p-4 text-white flex justify-between">
            <h1 className="text-xl font-bold">KOAKAO shop</h1>
            <button onClick={toggleCart} className="relative">
                🛒
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 rounded-full px-2 text-xs">
                        {cartCount}
                    </span>
                )}
            </button>
        </nav>
    );
}
