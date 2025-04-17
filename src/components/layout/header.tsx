import Link from 'next/link';
import { HeaderSearchBar } from './header-search-bar';
import { HeaderUserNav } from './header-user-nav';

const Header = () => {
    return (
        <header className="w-full bg-background border-b space-y-2 sticky top-0 left-0 z-100">
            <div className="py-4 px-6 max-w-5xl mx-auto flex gap-4">
                <Link href="/">
                    <img src="/static/images/header-logo.svg" alt="Logo Compra Certa" className="h-10" />
                </Link>
                <div className="flex-1">
                    <HeaderSearchBar />
                </div>
                <HeaderUserNav />
            </div>
        </header>
    );
};

export { Header };
