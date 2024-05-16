'use client';

import React, { ReactNode } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';

export interface ReduxProviderProps {
    children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
    return (
        <SessionProvider>
            <Provider store={store}>{children}</Provider>
        </SessionProvider>
    );
}
