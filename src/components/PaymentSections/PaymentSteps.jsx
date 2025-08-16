import { useState } from "react";
import {PaymentDetail} from "./PaymentDetail.jsx";
import {PaymentInfo} from "./PaymentInfo.jsx";
import {Pay} from "./Pay.jsx";

export const PaymentSteps = ({cartItems}) => {
    const [currentStep, setCurrentStep] = useState(1);

    const progressWidth = `${((currentStep / 3 ) ) * 100}%`;
    const [user, setUser] = useState([]);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="px-10">
            <h2 className="sr-only">Steps</h2>

            <div className="overflow-hidden rounded-full bg-gray-200">
                <div
                    className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                    style={{ width: progressWidth }}
                ></div>
            </div>

            <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                <li
                    className={`flex items-center justify-start sm:gap-1.5 ${
                        currentStep >= 1 ? "text-blue-600" : "text-gray-500"
                    }`}
                    onClick={() => setCurrentStep(1)}
                    style={{ cursor: "pointer" }}
                >
                    <span className="hidden sm:inline"> سبد خرید </span>

                    <svg
                        className="size-6 sm:size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                    </svg>
                </li>

                <li
                    className={`flex items-center justify-center sm:gap-1.5 ${
                        currentStep >= 2 ? "text-blue-600" : "text-gray-500"
                    }`}
                    onClick={() => currentStep >= 2 && setCurrentStep(2)}
                    style={{ cursor: currentStep >= 2 ? "pointer" : "default" }}
                >
                    <span className="hidden sm:inline"> اطلاعات سفارش </span>

                    <svg
                        className="size-6 sm:size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </li>

                <li
                    className={`flex items-center justify-end sm:gap-1.5 ${
                        currentStep >= 3 ? "text-blue-600" : "text-gray-500"
                    }`}
                    onClick={() => currentStep >= 3 && setCurrentStep(3)}
                    style={{ cursor: currentStep >= 3 ? "pointer" : "default" }}
                >
                    <span className="hidden sm:inline"> پرداخت </span>

                    <svg
                        className="size-6 sm:size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                    </svg>
                </li>
            </ol>

            <div>
                {currentStep === 1 && <PaymentDetail cartItems={cartItems} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
                {currentStep===2 && <PaymentInfo currentStep={currentStep} setCurrentStep={setCurrentStep} user={user} setUser={setUser} price={totalPrice} cartItems={cartItems} />}
                {currentStep===3 && <Pay  user={user}  />}
            </div>
        </div>
    );
};
