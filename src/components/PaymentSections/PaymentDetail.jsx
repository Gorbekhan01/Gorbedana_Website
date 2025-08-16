import {useState} from "react";


export const PaymentDetail = ({cartItems, currentStep, setCurrentStep}) => {
    const [active, setActive] = useState(false);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="bg-[#141414] flex flex-col items-center justify-start py-10 px-4 w-full max-w-md mx-auto">
            <h2 className="text-white text-2xl mb-6">سبد خرید شما</h2>
            <ul className="w-full space-y-4">
                {cartItems.map(product => (
                    <li
                        key={product.id}
                        className="relative bg-gray-800 text-white rounded-md shadow-md flex items-center h-[70px] gap-4"
                    >
                        <img src={product.image} alt={product.title} className="h-[70px] left-0"></img>
                        <div className="flex flex-col">
                            <span className="font-semibold">{product.title}</span>
                            <span className="text-sm text-gray-500">{"size: "}{product.size}</span>
                        </div>
                        <div className="absolute right-3 bottom-3">
                            <p className="flex gap-2  flex-row-reverse max-md:text-[12px]" ><span>{product.price}</span> <span>{"هزار تومان"}</span> </p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex gap-2  flex-row-reverse mt-[10px]" ><span className="bg-blue-600 px-1 text-white">مبلغ کل </span><span className="bg-white text-black font-semibold px-2 flex flex-row-reverse">< span>{totalPrice}</span> <span>{"هزار تومان"}</span></span></div>


            <div className="mt-[20px]">
                <label className="px-[5px]">همینا درسته</label>
                <input
                    type="checkbox"
                    checked={active}
                    onChange={() => setActive(!active)}
                />
            </div>


            {active && <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
                مرحله بعد
            </button>
            }
        </div>
    );
};
