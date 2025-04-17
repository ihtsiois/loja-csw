import Link from 'next/link';

const groups = [
    {
        title: 'Institucional',
        links: [
            { label: 'Sobre Nós', href: '/sobre' },
            { label: 'Nossa História', href: '/historia' },
            { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
            { label: 'Política de Privacidade', href: '/privacidade' },
        ],
    },
    {
        title: 'Atendimento',
        links: [
            { label: 'Fale Conosco', href: '/contato' },
            { label: 'Perguntas Frequentes (FAQ)', href: '/faq' },
            { label: 'Trocas e Devoluções', href: '/trocas-e-devolucoes' },
            { label: 'Suporte Técnico', href: '/suporte' },
        ],
    },
    {
        title: 'Minha Conta',
        links: [
            { label: 'Meus Pedidos', href: '/minha-conta/pedidos' },
            { label: 'Meus Dados', href: '/minha-conta/dados' },
            { label: 'Endereços', href: '/minha-conta/enderecos' },
            { label: 'Sair', href: '/logout' },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="mt-8 bg-muted text-muted-foreground border-t">
            <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-5 gap-8">
                <div className="col-span-2 space-y-2">
                    <Link href="/">
                        <img src="/static/images/footer-logo.svg" className="h-12" />
                    </Link>
                </div>
                {groups.map((group, k) => (
                    <div key={k} className="space-y-4">
                        <h2 className="font-medium">{group.title}</h2>
                        <ul className="space-y-2">
                            {group.links.map((link, k) => (
                                <li key={k} className="block">
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export { Footer };
