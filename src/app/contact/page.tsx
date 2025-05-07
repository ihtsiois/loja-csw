import { BannerOutHistory } from '@/components/banners';
import { ContactForm } from '@/components/contact-form';
import { Footer, Header } from '@/components/layout';
import { Mail, PhoneCall } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export default () => {
    return (
        <>
            <Header />
            <main>
                <div className="max-w-5xl mx-auto px-6 mt-6 grid grid-cols-2 gap-6">
                    <div className="row-span-4 border p-8 rounded-md shadow-xs space-y-6">
                        <div>
                            <h2 className="text-xl font-medium">Formulário de Contato</h2>
                            <span className="text-sm text-muted-foreground">
                                Preencha seus dados para entrar em contato.
                            </span>
                        </div>
                        <ContactForm />
                        <p className="text-xs text-center text-balance text-muted-foreground">
                            Ao enviar, você concorda com o processamento de seus dados. Retornaremos seu contato através
                            dos meios fornecidos acima.
                        </p>
                    </div>
                    <button className="border p-5 hover:bg-muted rounded-md shadow-xs text-start flex items-center gap-4 transition-colors cursor-pointer">
                        <FaWhatsapp className="size-8" />
                        <div>
                            <span className="block font-medium">Whatsapp</span>
                            <span className="text-sm text-muted-foreground">Entre em contato via Whatsapp</span>
                        </div>
                    </button>
                    <button className="border p-5 hover:bg-muted rounded-md shadow-xs text-start flex items-center gap-4 transition-colors cursor-pointer">
                        <PhoneCall className="size-8" />
                        <div>
                            <span className="block font-medium">Ligar</span>
                            <span className="text-sm text-muted-foreground">Nos ligue para entrar em contato</span>
                        </div>
                    </button>
                    <button className="border p-5 hover:bg-muted rounded-md shadow-xs text-start flex items-center gap-4 transition-colors cursor-pointer">
                        <FaInstagram className="size-8" />
                        <div>
                            <span className="block font-medium">Instagram</span>
                            <span className="text-sm text-muted-foreground">
                                Veja nossa página no instagram e entre em contato
                            </span>
                        </div>
                    </button>
                    <button className="border p-5 hover:bg-muted rounded-md shadow-xs text-start flex items-center gap-4 transition-colors cursor-pointer">
                        <Mail className="size-8" />
                        <div>
                            <span className="block font-medium">E-mail</span>
                            <span className="text-sm text-muted-foreground">Entre em contato via e-mail</span>
                        </div>
                    </button>
                </div>
                <BannerOutHistory />
            </main>
            <Footer />
        </>
    );
};
