import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export const Paid = () => {
    const location = useLocation();
    const user = location.state?.user;
    console.log(user);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/shop");
    };

    return (
        <div className="bg-[#141414] min-h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center flex flex-col justify-center items-center">
                <h2 className="text-white text-3xl mb-6 flex flex-row-reverse items-center justify-center gap-2">
                    <span>به به! مبارک همگی</span>
                    <span>🎉</span>
                </h2>
                <div className="text-white mb-4 text-lg rtl">سفارش شما ثبت شد</div>
                <div className="bg-blue-100 text-blue-700 font-mono text-[30px] font-semibold w-[200px] h-[50px]">{user.order_id}</div>
                <p className="text-white text-base mt-3 text-[16px] ">
                    شماره سفارش خود را به آی دی تلگرام زیر بفرستید
                    <br/>
                    <p className="mt-4 bg-blue-600">@Gorbekhan
                    </p>
                </p>
                <button
                    onClick={handleNavigate}
                    className=" mt-6 inline-flex items-center gap-2 rounded-sm border border-blue-700 bg-blue-700 px-8 py-3
            text-white hover:bg-transparent hover:text-blue-700 focus:ring-3 focus:outline-hidden max-md:px-5"
                >
            <span className="text-sm font-medium max-md:text-[12px]">
                بازگشت به فروشگاه
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
        </div>
    );
};
