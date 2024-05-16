'use client';

import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import $ from 'jquery';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

export interface IAppProps {}

export default function OwlCarouselCP({ children }: { children: JSX.Element }) {
    const option = {
        loop: true,
        margin: 40,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateIn: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            550: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <OwlCarousel className={`owl-theme`} {...option}>
            {children}
        </OwlCarousel>
    );
}
