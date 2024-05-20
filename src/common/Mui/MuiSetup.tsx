'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { theme } from './theme';

type MuiSetupProps = {
    children: ReactNode;
};

export default function MuiSetUp({ children }: MuiSetupProps) {
    // Router

    return (
        <>
            <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {/* custom layout */}
                    {children}
                </ThemeProvider>
            </NextAppDirEmotionCacheProvider>
        </>
    );
}
