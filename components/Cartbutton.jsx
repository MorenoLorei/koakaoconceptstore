"use client";
import { useCart } from "@/context/Cartcontext";

export default function CartButton() {
    const { setIsOpen, cart } = useCart();
    return (
        <button onClick={() => setIsOpen(true)} className="relative p-3 bg-blue-600 text-white rounded-full">
            🛒
            {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                </span>
            )}
        </button>
    );
}
