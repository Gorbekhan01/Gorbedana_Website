import {useState} from "react";
import {Dropdown} from "./Dropdown.jsx";

export const ProductCard = ({image, title, price, onAddToCart}) => {
    const [added, setAdded] = useState(false);
    const [size, setSize] = useState("S");

    const handleAdd = (e) => {
        e.preventDefault();
        onAddToCart({size});
        setAdded(true);
        setTimeout(() => setAdded(false), 1000);
    }

    return (
        <div
            className="slide-in-left group relative rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white overflow-hidden">
            <img
                src={image}
                alt={title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="p-5 border-t border-gray-100">
                <h3 className="text-right mt-3 text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition">
                    {title}
                </h3>

                <div className="flex items-center justify-between">
                    <p className="mt-1.5 text-sm text-gray-600 flex justify-start gap-1">
                        <span>هزار تومان</span> <span>{price}</span>
                    </p>
                    <div>
                        <Dropdown sizes={["S","M","L","XL","2XL"]} size={size} setSize={setSize} />
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleAdd}
                    disabled={added}
                    className={`mt-4 w-full rounded-md py-2 font-semibold transition duration-200
                        ${added ? "bg-green-600 text-white" : "bg-blue-700 hover:bg-blue-100 hover:text-black text-white"}`}
                >
                    {added ? "اضافه شد" : "افزودن به سبد خرید"}
                </button>
            </div>
        </div>
    );
};
