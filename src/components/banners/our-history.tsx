import Link from 'next/link';
import { Button } from '../ui/button';

export const BannerOutHistory = () => {
    return (
        <section
            id="cta-about"
            className="max-w-5xl mx-auto my-10 p-12 bg-background border rounded-md shadow flex items-center justify-center space-x-6"
        >
            <img src="/static/images/our-history.svg" alt="Nossa História" className="h-32" />
            <div className="space-y-4">
                <div>
                    <h2 className="text-2xl font-medium">Conheça Nossa História</h2>
                    <p className="text-sm text-muted-foreground">Veja como chegamos até aqui!</p>
                </div>
                <div className="flex">
                    <Button variant="default" className="w-full" asChild>
                        <Link href="/about">Conhecer Agora</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
