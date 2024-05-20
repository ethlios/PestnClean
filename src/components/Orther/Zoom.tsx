import { useRef, ComponentProps, RefCallback } from 'react';
import mediumZoom, { Zoom, ZoomOptions } from 'medium-zoom';
import 'medium-zoom/dist/style.css';
import Image from 'next/image';

type ImageZoomProps = ComponentProps<'img'> & {
    options?: ZoomOptions;
    src: string;
    alt: string;
    width: number;
    height: number;
    id?: string;
    className?: string;
    hello?: any;
};

export function ImageZoom({ options, src, alt, width, height, id, className, hello }: ImageZoomProps) {
    const zoomRef = useRef<Zoom | null>(null);

    function getZoom() {
        if (zoomRef.current === null) {
            zoomRef.current = mediumZoom(options);
        }

        return zoomRef.current;
    }

    const attachZoom: RefCallback<HTMLImageElement> = (node) => {
        const zoom = getZoom();

        if (node) {
            zoom.attach(node);
        } else {
            zoom.detach();
        }
    };

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            ref={attachZoom}
            id={id}
            className={className}
            priority
            style={hello}
        />
    );
}
