export const slideFromX = (item?: any, x?: number) => {
    // From Left to Right: x = - > 0
    // From Right to Left: x = 0 > +
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

export const slideFromY = (item?: any, y?: number) => {
    // From Top to Bottom: x = - > 0
    // From Bottom to Top: x = 0 > +
    return [
        {
            y: y,
            opacity: 0,
            skewY: '65px',
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            skewY: '0px',
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
            },
        },
    ];
};

export const fadeIn = (trigger: any) => {
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

export const fadeOut = (trigger: any) => {
    return [
        {
            scale: 1,
            opacity: 1,
        },
        {
            scale: 0,
            opacity: 0,
            ease: 'power3.out',
            duration: 1.2,
            scrollTrigger: {
                trigger: trigger,
            },
        },
    ];
};

export const rotate = (trigger: any) => {
    return [
        {
            rotate: 0,
            scale: 0,
            opacity: 0,
        },
        {
            rotate: 360,
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