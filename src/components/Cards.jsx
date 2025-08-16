import photo1 from '/src/assets/Pics/gary3.png'
import photo2 from '/src/assets/Pics/gary1.png'
import {useNavigate} from "react-router-dom";


export const Cards = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(
            '/shop');
    }
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <Card
                title="خرید مرچ"
                discount=""
                imageUrl={photo1}
                description="با بقیه متفاوت باش! از اینجا مرچ های انتشارات گربه دانا رو بگیر"
                detail="رفتن به فروشگاه"
                func={handleClick}
            />

            {/* Card 2 */}
            <Card
                title="حمایت"
                discount="به زودی"
                imageUrl={photo2}
                description="ما که این همه زحمت می کشیم دلت نمیاد برای ما یه قهوه بگیری ؟👈👉 ماعو‌"
                detail="برامون قهوه بگیر"
                func=""
            />
        </div>
    );
};


const Card = ({title, discount, imageUrl, description, detail, func}) => (
    <span
        className="relative block rounded-tr-3xl border border-gray-100 w-[400px] h-[500px] hover:shadow-2xl max-md:w-[200px] max-md:h-[300px]">
        {discount !== "" && <span
            className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-bold text-white uppercase max-md:text-[12px]">
      {discount}
    </span>}

        <img src={imageUrl} alt="meow" className="h-80 w-full rounded-tr-3xl object-cover max-md:h-[120px]"/>

        <div className="p-4 flex flex-col items-center justify-center gap-2 text-center">
  <strong className="text-xl font-bold text-white">{title}</strong>

  <div className="flex flex-col items-center gap-2 w-full">
    <p className="text-sm text-white">{description}</p>

    <button
        onClick={func}
        className="mt-2 block max-md:text-[12px] max-md:mb-[5px] rounded-md border border-blue-700 bg-blue-700 px-5 py-3 text-sm font-bold text-white uppercase transition-colors hover:bg-white hover:text-blue-700"
    >
      {detail}
    </button>
  </div>
</div>

    </span>
);
