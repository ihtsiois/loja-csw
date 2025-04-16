import { HeartIcon, UserRoundIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from '../ui/button';

const HeaderUserNav = () => {
    return (
        <nav className="flex">
            <Button size="icon" variant="ghost" className="size-10">
                <HeartIcon />
            </Button>
            <Button size="icon" variant="ghost" className="size-10">
                <UserRoundIcon />
            </Button>
            <Button size="icon" variant="ghost" className="size-10">
                <ShoppingCartIcon />
            </Button>
        </nav>
    );
};

export { HeaderUserNav };
