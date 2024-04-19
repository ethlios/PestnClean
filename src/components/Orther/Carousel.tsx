'use client';

import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

export interface IAppProps {}

export default function OwlCarouselCP({ children }: { children: JSX.Element }) {
    return (
        <OwlCarousel
            className={`owl-theme`}
            loop
            margin={40}
            autoplay
            dots
            autoplayTimeout={3000}
            autoplayHoverPause
            animateIn
        >
            {children}
        </OwlCarousel>
    );
}
