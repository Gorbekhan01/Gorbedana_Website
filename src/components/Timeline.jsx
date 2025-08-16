export const Timeline = () => {
    return (
        <ol
            className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-700"
        >
            <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
                <div
                    className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                >
                    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                    <div className="-mt-2">
                        <time className="text-xs/none font-medium text-gray-200">تابستان ۱۳۹۹</time>

                        <h3 className="text-lg font-bold text-white">تاسیس انتشارات</h3>

                        <p className="mt-0.5 text-sm text-gray-200">
                            انتشار اولین مجلات در واتساپ
                        </p>
                    </div>
                </div>

                <div aria-hidden="true"></div>
            </li>

            <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
                <div
                    className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                >
                    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                    <div className="-mt-2">
                        <time className="text-xs/none font-medium text-gray-200">دی ۱۴۰۰</time>

                        <h3 className="text-lg font-bold text-white">تاسیس چنل تلگرام</h3>

                        <p className="mt-0.5 max-md:px-2 text-sm text-gray-200">
                           تبدیل شدن تلگرام به تنها منبع انتشار محصولات انتشارات
                        </p>
                    </div>
                </div>

                <div aria-hidden="true"></div>
            </li>

            <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
                <div
                    className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                >
                    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                    <div className="-mt-2">
                        <time className="text-xs/none font-medium text-gray-200">تیر ۱۴۰۴</time>

                        <h3 className="text-lg font-bold text-white">حال حاضر</h3>

                        <p className="mt-0.5 max-md:px-3 text-sm text-gray-200 break-words whitespace-normal">
                            انتشار ۶ کتاب و ۲ مجله
                            بسیار جذاب
                        </p>
                    </div>
                </div>

                <div aria-hidden="true"></div>
            </li>
        </ol>
    )
}