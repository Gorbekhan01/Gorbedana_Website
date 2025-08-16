import React from "react";
import {useNavigate} from "react-router-dom";

export const CartWindow = ({cartOpen, setCartOpen, cartItems, onRemoveItem}) => {
    if (!cartOpen) return null;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const goPayment = () => {
        navigate('/payment', { state: { from: '/shop',cartItems: cartItems } });
    }

    return (
        <div className="absolute top-20 left-10 w-64 text-white p-4 rounded-3xl shadow-lg z-50 max-md:left-2">
            <div
                className="relative w-screen max-w-sm border backdrop-blur-3xl bg-white/10 border-white/20 shadow-2xs px-4 py-8 sm:px-6 lg:px-8 rounded-3xl
        max-md:w-[320px] max-md:px-10"
                aria-modal="true"
                role="dialog"
                tabIndex="-1"
            >
                <button
                    onClick={() => setCartOpen(false)}
                    className="absolute end-4 top-4 text-blue-700 transition hover:scale-110"
                    aria-label="بستن سبد خرید"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <h2 className="mb-4 text-lg font-bold text-center text-white">سبد خرید شما</h2>

                {cartItems.length === 0 ? (
                    <p className="text-white text-center">سبد خرید خالی است</p>
                ) : (
                    <ul className="space-y-4 max-h-64 overflow-y-auto">
                        {cartItems.map((product) => (
                            <li key={product.id} className="flex items-center gap-4">
                                <img src={product.image} alt={product.title} className="w-16 h-16 rounded-sm object-cover"/>

                                <div className="flex-1 text-white">
                                    <h3 className="text-sm font-bold">{product.title}</h3>
                                    <p className="text-[14px] flex justify-start gap-1">
                                        <span> هزار تومان</span>
                                        <span> {product.price} </span>
                                    </p>
                                    <p>
                                        <span className="text-[14px]">size : {product.size}</span>
                                    </p>
                                </div>

                                <button
                                    onClick={() => onRemoveItem(product.id)}
                                    className="text-white transition hover:text-red-600"
                                    aria-label={`حذف ${product.title} از سبد خرید`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {cartItems.length > 0 && (
                    <div className="space-y-4 text-center mt-6 flex flex-row justify-between">
                        <button
                            onClick={goPayment}
                            className="w-1/2 block rounded-sm bg-blue-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-white hover:text-blue-700 font-bold"
                        >
                            ادامه خرید
                        </button>
                        <div className="flex flex-col items-end text-black">
                            <p> مبلغ کل</p>
                            <p className="flex justify-end text-[16px] font-semibold  mt-2 text-black">
                                <span className="ml-1">  هزار تومان</span>
                                <span>{totalPrice}</span>
                            </p>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};
