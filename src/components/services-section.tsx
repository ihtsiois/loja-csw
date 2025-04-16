import { CreditCardIcon, HeadphonesIcon, PackageCheckIcon } from 'lucide-react';

const services = [
    {
        icon: <img src="/static/images/pix-icon.svg" alt="Logo PIX" className="size-8" />,
        title: 'Pague com PIX',
        description: 'e ganhe desconto',
    },
    {
        icon: <CreditCardIcon className="size-8" />,
        title: 'Cartão Certo',
        description: 'aproveite benefícios',
    },
    {
        icon: <PackageCheckIcon className="size-8" />,
        title: 'Compre e Retire',
        description: 'diretamente na loja',
    },
    {
        icon: <HeadphonesIcon className="size-8" />,
        title: 'Time de Atendimento',
        description: 'suporte e vendas',
    },
];

const ServicesSection = () => {
    return (
        <section className="max-w-5xl mx-auto flex flex-wrap">
            {services.map((service, k) => (
                <div key={k} className="flex-1 p-6 flex space-x-3 items-center justify-center">
                    {service.icon}
                    <div className="leading-none">
                        <span className="font-medium block">{service.title}</span>
                        <span className="text-sm text-muted-foreground">{service.description}</span>
                    </div>
                </div>
            ))}
        </section>
    );
};

export { ServicesSection };
