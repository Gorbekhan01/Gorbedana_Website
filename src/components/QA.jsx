export const QA = () => {
    const items = [
        {
            question: 'اینجا چخبره',
            answer: 'نمی دانم خبرا دست شماست',
            open: true,
        },
        {
            question: 'شما که انتشاراتید پس کتاباتون کو',
            answer: 'تو  چنل تلگراممون',
        },
        {
            question: 'شما چجوری انقدر بیکارید',
            answer: 'شما خودت از ما بیکار تری که داری سایت ما را می خونی',
        },
    ];

    return (
        <div className="w-[800px] max-w-full mx-auto space-y-10 p-4 bg-[#141414] rounded-md shadow-lg max-md:w-[500px]">
            {items.map((item, index) => (
                <details
                    key={index}
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open={item.open}
                >
                    <summary className="flex items-center justify-between gap-2 rounded-md border border-gray-700 bg-gray-800 p-4 text-white cursor-pointer">
                        <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        <h2 className="text-lg font-semibold">{item.question}</h2>
                    </summary>
                    <p className="px-4 pt-4 text-gray-300">{item.answer}</p>
                </details>
            ))}
        </div>
    );
};
