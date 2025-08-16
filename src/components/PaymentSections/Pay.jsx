import { useNavigate } from "react-router-dom";
import { supabase } from "/src/components/Database/Supabase.jsx";

export const Pay = ({ user }) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!user) {
            alert("اطلاعات کاربر موجود نیست!");
            return;
        }

        try {
            const { error } = await supabase
                .from('orders')
                .insert(user);

            if (error) {
                alert("خطا در ثبت سفارش، دوباره تلاش کنید.");
                console.error("خطا:", error);
                return;
            }
            navigate("/payment/final", { state: { user} });

        } catch (err) {
            console.error(err);
            alert("خطا در ثبت سفارش، دوباره تلاش کنید.");
        }
    };





    return (
        <div className="bg-[#141414] flex flex-col items-center justify-start py-10 px-4 w-full max-w-md mx-auto">
            <h2 className="text-white text-2xl mb-6">ثبت نهایی و پرداخت</h2>
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
                    <strong className="font-medium text-sm max-sm:text-xs">اطلاعیه</strong>
                </div>
                <p className="mt-2 text-sm text-red-700 text-right max-sm:text-xs">
                    در حال حاضر امکان خرید مستقیم از فروشگاه وجود ندارد. در صورت تمایل با زدن گزینه پرداخت کد سفارش را دریافت کرده و به آی دی تلگرامی نمایش داده شده در مرحله بعد پیام دهید تا سفارش برایتان ارسال شود
                </p>
            </div>
            <button
                type="button"
                onClick={handleClick}
                className="mt-6 bg-blue-700 hover:text-white hover:bg-blue-200 hover:text-blue-700 px-6 py-2 rounded-md transition"
            >
                پرداخت
            </button>
        </div>
    );
};
