'use client';

import * as React from 'react';
import useSize from '~/libs/hooks/useSize';

export interface IAppProps {}

export default function Admin(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div
            style={{
                padding:
                    sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px',
            }}
        >
            Hello
        </div>
    );
}
