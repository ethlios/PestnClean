import { useEffect, useState } from 'react';

const useSize = () => {
    const [size, setSize] = useState<{ sizeX: number; sizeY: number }>({
        sizeX: 0,
        sizeY: 0,
    });

    useEffect(() => {
        const size = () => {
            setSize({
                sizeX: window.innerWidth,
                sizeY: window.innerHeight,
            });
        };

        size();

        window.addEventListener('resize', size);

        return () => window.removeEventListener('resize', size);
    }, []);

    return size;
};

export default useSize;
