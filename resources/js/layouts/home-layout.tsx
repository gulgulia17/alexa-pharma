import { type ReactNode } from 'react';
import Header from '@/layouts/home/home-header-layout';
import Footer from '@/layouts/home/home-footer-layout';

interface AppLayoutProps {
    children: ReactNode;
}

export default ({ children, ...props }: AppLayoutProps) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
);
