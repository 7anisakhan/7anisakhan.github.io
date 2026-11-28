import { useEffect, useState } from "react";

export default function useInView(ref, threshold = 0.4, dwell = 500) {
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || seen) return;

        let timer;
        const observer = new IntersectionObserver(
            ([entry]) => {
                clearTimeout(timer);
                if (entry.isIntersecting) {
                    timer = setTimeout(() => {
                        setSeen(true);
                        observer.disconnect();
                    }, dwell);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [ref, threshold, dwell, seen]);

    return seen;
}