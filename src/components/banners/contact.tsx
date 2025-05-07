import Link from 'next/link';
import { Button } from '../ui/button';
import { PhoneCall } from 'lucide-react';

export const BannerContact = () => {
    return (
        <section
            id="cta-about"
            className="max-w-5xl mx-auto my-10 p-12 bg-background border rounded-md shadow flex items-center justify-center space-x-6"
        >
            <img src="/static/images/contact.svg" alt="Nossa História" className="h-32" />
            <div className="space-y-4">
                <div>
                    <h2 className="text-2xl font-medium">Contato</h2>
                    <p className="text-sm text-muted-foreground">Entre em contato agora!</p>
                </div>
                <div className="flex">
                    <Button variant="default" className="w-full" asChild>
                        <Link href="/about">
                            <PhoneCall />
                            <span>Entrar em Contato</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
