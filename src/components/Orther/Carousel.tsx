import * as React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
