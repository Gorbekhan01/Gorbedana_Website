import { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({ children, animationClass = 'slide-in-left', threshold = 0.2 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return (
        <div ref={ref} className={`${isVisible ? animationClass : 'opacity-0'}`}>
            {children}
        </div>
    );
};
