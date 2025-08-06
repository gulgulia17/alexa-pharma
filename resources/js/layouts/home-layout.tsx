import { type ReactNode } from 'react';
import Header from '@/layouts/home/home-header-layout';
import Footer from '@/layouts/home/home-footer-layout';
import { Toaster } from '@/components/ui/toaster';

interface AppLayoutProps {
    children: ReactNode;
}

export default ({ children, ...props }: AppLayoutProps) => (
    <>
        <Toaster />
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
);
