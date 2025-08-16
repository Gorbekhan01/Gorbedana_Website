import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { CartWindow } from "./CartWindow.jsx";
import { ProductCard } from "./ProductCard.jsx";

export const Shop = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    const [products, setProducts] = useState([]);

    const handleNavigate = () => {
        navigate("/");
    };

    const handleAddToCart = (product) => {
        setCartItems((prev) => [...prev, { ...product, id: Date.now() }]);
    };

    const handleRemoveFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };


    // using api for products
    useEffect(() => {
        fetch(process.env.GET_API)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("error fetching api", err));
    }, [] );


    return (
        <div className="relative h-screen bg-[#141414] flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div className="absolute top-10 h-[30px] w-full flex flex-row justify-center items-center align-baseline max-md:flex-col max-md:gap-4">
                <div className="mt-40 font-bold text-3xl text-white top-0">
                    فروشگاه گربه دانا
                </div>

                <div className="absolute mt-36 right-10 max-md:static max-md:mt-4">
                    <button
                        onClick={handleNavigate}
                        className="inline-flex items-center gap-2 rounded-sm border border-blue-700 bg-blue-700 px-8 py-3
            text-white hover:bg-transparent hover:text-blue-700 focus:ring-3 focus:outline-hidden max-md:px-5"
                    >
            <span className="text-sm font-medium max-md:text-[12px]">
              {" "}
                بازگشت به خانه{" "}
            </span>

                        <svg
                            className="size-5 shadow-sm rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>

                <button
                    onClick={() => setCartOpen(!cartOpen)}
                    className="absolute mt-36 left-12 w-8 h-8 text-white"
                >
                    <svg
                        fill="#ffffff"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 902.86 902.86"
                        xmlSpace="preserve"
                    >
                        <g>
                            <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path>
                            <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path>
                        </g>
                    </svg>
                </button>

                {cartOpen && (
                    <CartWindow
                        cartOpen={cartOpen}
                        setCartOpen={setCartOpen}
                        cartItems={cartItems}
                        onRemoveItem={handleRemoveFromCart}
                    />
                )}
            </div>

            <div className="absolute top-[280px] w-full px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            onAddToCart={({size}) =>
                                handleAddToCart({
                                    image: product.image,
                                    title: product.title,
                                    price: product.price,
                                    size : size
                                })
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
