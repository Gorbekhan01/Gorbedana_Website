import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {PaymentSteps} from "./PaymentSections/PaymentSteps.jsx";

export function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    // get cartWindow product list
    const cartItems = location.state?.cartItems;

    useEffect(() => {
        if (location.state?.from !== "/shop") {
            navigate("/shop", { replace: true });
        }
    }, [location, navigate]);

    return (
        <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-start py-10 px-4">
            <div className="mt-[10px] mb-[14px]">مراحل خرید</div>
            <div className="w-screen">
                <PaymentSteps cartItems={cartItems} />
                {cartItems.map((item) => (
                    console.log(item)
                ))}

            </div>
        </div>

    )
}
