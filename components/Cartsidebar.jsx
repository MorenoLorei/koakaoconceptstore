"use client";
import { useState } from "react";
import { useCart } from "../context/Cartcontext";

export default function CartSidebar() {
    const { cart, totalPrice, isCartOpen, toggleCart, removeFromCart } = useCart();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const sendToWhatsApp = () => {
        if (!phone) {
            alert("Please enter a phone number!");
            return;
        }
        if (!email) {
            alert("Please enter an email!");
            return;
        }
        if (!name) {
            alert("Please enter a name!");
            return;
        }

        // Format number to ribu/juta
        const formatIDPrice = (num) => {
            const price = Number(num) || 0; // make sure it's a number
            if (price >= 1_000_000) {
                return `Rp ${(price / 1_000_000).toFixed(1).replace(/\.0$/, "")} juta`;
            } else if (price >= 1_000) {
                return `Rp ${(price / 1_000).toFixed(1).replace(/\.0$/, "")} ribu`;
            }
            return `Rp ${price}`;
        };

        // Calculate total price
        const totalPrice = cart.reduce((total, item) => {
            return total + (Number(item.price) * item.quantity);
        }, 0);

        // Build message
        let message = `DETAIL ORDERAN\n\n`;
        cart.forEach((item) => {
            const subtotal = Number(item.price) * item.quantity;
            message += `- ${item.name} x${item.quantity} | ${formatIDPrice(subtotal)}\n`;
        });

        message += `\nTotal: ${formatIDPrice(totalPrice)}\n\n`;
        message += `NAMA: ${name}\nNOMOR HP: ${phone}\nEMAIL: ${email}`;

        const url = `https://wa.me/6281529408733?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };


    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 transform transition-transform ${
                isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <button onClick={toggleCart} className="mb-4 text-red-500">Close</button>
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="mb-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between mb-2">
                                <span>{item.name} x{item.quantity}</span>
                                <span>{item.price}</span>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-sm text-red-500"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="font-bold mb-4">Total: {totalPrice}</p>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border p-2 w-full mb-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="border p-2 w-full mb-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 w-full mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                        onClick={sendToWhatsApp}
                        className="bg-green-500 text-white p-2 w-full rounded"
                    >
                        Send to WhatsApp
                    </button>
                </>
            )}
        </div>
    );
}
