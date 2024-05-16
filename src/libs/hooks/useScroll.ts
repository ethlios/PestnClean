import { useEffect, useState } from 'react';

const useScroll = () => {
    const [hideBars, setHideBars] = useState<boolean>(false);

    useEffect(() => {
        const horizontal = (event: any) => {
            const delta = Math.sign(event.deltaY);

            if (delta === 1) {
                setHideBars(true);
            } else if (delta === -1) {
                setHideBars(false);
            }
        };

        window.addEventListener('wheel', horizontal);

        return () => window.removeEventListener('wheel', horizontal);
    }, []);

    return hideBars;
};

export default useScroll;
