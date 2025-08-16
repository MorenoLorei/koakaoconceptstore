export default function PrimaryButton({ children }) {
    return (
        <button
            className="px-6 py-3 rounded-lg bg-gray-700 text-white
                 shadow-sm hover:bg-gray-800
                 transition-colors duration-200 ease-in-out
                 focus:outline-none focus:ring-2 focus:bg-white/20 focus:ring-offset-2"
        >
            {children}
        </button>
    );
}