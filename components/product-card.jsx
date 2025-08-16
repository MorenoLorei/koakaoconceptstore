import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({
                         imageUrl,
                         name,
                         description,
                         price,
                         badge,
                         badgeColor = "bg-blue-500",
                         showButton = false
                     }) => {
    return (
        <div
            className="relative bg-white rounded-2xl border shadow-md hover:shadow-lg transition duration-300 p-4 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            tabIndex="0" // Improves keyboard accessibility
        >
            {/* Badge (with aria-label for screen readers) */}
            {badge && (
                <span
                    className={`absolute top-4 left-4 text-xs font-semibold px-2 py-1 rounded-md text-white shadow ${badgeColor}`}
                    aria-label={`Product badge: ${badge}`}
                >
          {badge}
        </span>
            )}

            {/* Image Wrapper (with lazy loading and aspect ratio) */}
            <div className="w-full aspect-square flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-50">
                <img
                    src={imageUrl}
                    alt={name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy" // Improves performance
                    width="200" // Explicit dimensions prevent layout shifts
                    height="200"
                />
            </div>

            {/* Product Info (with better semantic HTML) */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 line-clamp-2" title={name}>
                    {name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2" title={description}>
                    {description}
                </p>
                <p className="text-lg font-bold text-blue-600">
                    RP {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
            </div>
        </div>
    );
};

// Prop type validation
ProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    badge: PropTypes.string,
    badgeColor: PropTypes.string,
    showButton: PropTypes.bool,
};

export default ProductCard;