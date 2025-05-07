import { ShoppingCartIcon, PhoneCall } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const HeaderUserNav = () => {
    return (
        <nav className="flex">
            <Button size="icon" variant="ghost" className="size-10" asChild>
                <Link href="/contact">
                    <PhoneCall />
                </Link>
            </Button>
            <Button size="icon" variant="ghost" className="size-10">
                <ShoppingCartIcon />
            </Button>
        </nav>
    );
};

export { HeaderUserNav };
