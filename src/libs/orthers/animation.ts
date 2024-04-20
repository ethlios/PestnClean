export const animation = (item?: any, x?: number) => {
    return [
        {
            x: x,
            opacity: 0,
            skewX: '65px',
        },
        {
            x: 0,
            opacity: 1,
            duration: 1.2,
            skewX: '0px',
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
            },
        },
    ];
};

export const animation2 = (trigger: any) => {
    return [
        {
            scale: 0,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 1.2,
            scrollTrigger: {
                trigger: trigger,
            },
        },
    ];
};
