import { useState } from "react";

export const PaymentInfo = ({ currentStep, setCurrentStep, setUser ,price ,cartItems}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const order_id = generateRandomCode(6);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            name,
            phone,
            telegram_id: tel,
            address,
            price,
            order_id,
            products : cartItems
        });

        setCurrentStep(currentStep + 1);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#141414] flex flex-col items-center justify-start py-10 px-4 w-full max-w-md mx-auto"
        >
            <h2 className="text-white text-2xl mb-6">اطلاعات سفارش</h2>

            <label htmlFor="name" className="flex flex-col items-end w-full">
                <span className="text-[16px] font-medium text-gray-700 dark:text-gray-200">نام</span>
                <input
                    dir="rtl"
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-3 px-4 mb-4 text-right mt-0.5 w-full h-[40px] rounded border-gray-300 shadow-sm bg-white text-blue-700 font-semibold text-[20px]"
                />
            </label>

            <label htmlFor="phone" className="flex flex-col items-end w-full">
                <span className="text-[16px] font-medium text-gray-700 dark:text-gray-200">شماره تماس</span>
                <input
                    dir="rtl"
                    type="number"
                    id="phone"
                    required
                    maxLength={11}
                    minLength={11}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="py-3 px-4 mb-4 text-right mt-0.5 w-full rounded h-[40px] border-gray-300 shadow-sm bg-white text-blue-700 font-semibold text-[20px]"
                />
            </label>

            <label htmlFor="Tel" className="flex flex-col items-end w-full">
                <span className="text-[16px] font-medium text-gray-700 dark:text-gray-200">آی دی تلگرام</span>
                <input
                    type="text"
                    id="Tel"
                    required
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    className="py-3 px-4 mb-4 text-right mt-0.5 w-full rounded h-[40px] border-gray-300 shadow-sm bg-white text-blue-700 font-semibold text-[20px]"
                />
            </label>

            <label htmlFor="address" className="flex flex-col items-end w-full">
                <span className="text-[16px] font-medium text-gray-700 dark:text-gray-200">آدرس</span>
                <textarea
                    dir="rtl"
                    id="address"
                    required
                    rows="4"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-0.5 w-full resize-none rounded border-gray-300 shadow-sm text-[18px] bg-white text-black px-2 py-2"
                />
            </label>

            <div
                role="alert"
                className="border-s-4 border-red-700 bg-red-50 p-4 mt-4 rounded-2xl max-sm:p-3 max-sm:mt-3"
            >
                <div className="flex items-center gap-2 text-red-700 flex-row">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <strong className="font-medium text-sm max-sm:text-xs">توجه</strong>
                </div>

                <p className="mt-2 text-sm text-red-700 text-right max-sm:text-xs">
                    لطفا اطلاعات را به طور دقیق وارد کنید. در غیر این صورت سفارش پذیرفته نخواهد شد
                </p>
            </div>

            <button
                type="submit"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
                مرحله بعد
            </button>
        </form>
    );
};

function generateRandomCode(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}


