import { useCart } from "@/context/Cartcontext";
import toast from "react-hot-toast";

const ProductCardShop = ({ imageUrl, name, description, price, badge, badgeColor }) => {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({ name, price });
        toast.success(`${name} added to cart`);
    };

    return (
        <div className="relative bg-white rounded-2xl border shadow-md p-4">
            {badge && (
                <span className={`absolute top-4 left-4 text-xs font-semibold px-2 py-1 rounded-md text-white shadow ${badgeColor}`}>
                    {badge}
                </span>
            )}
            <div className="w-full h-40 flex items-center justify-center mb-4">
                <img src={imageUrl} alt={name} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm mt-1 mb-3">{description}</p>
            <p className="text-lg font-bold text-blue-600 mb-4">RP{parseFloat(price).toFixed(2)}</p>
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCardShop;
