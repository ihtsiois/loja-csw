export type Product = {
    slug: string;
    ref: string;
    thumbnail_src: string;
    images: string[];
    name: string;
    description: string;
    price: number;
    unit: string;
    metadata: { key: string; value: string }[];
};

export const products: Product[] = [
    {
        slug: 'cimento-comum-cpiv-50kg-votorantim',
        ref: '50902129',
        thumbnail_src: '/product-data/59ba98e8-87d7-43da-af0b-fd3ccfe28c18.webp',
        images: [
            '/product-data/59ba98e8-87d7-43da-af0b-fd3ccfe28c18.webp',
            '/product-data/49bccbbb-8bd5-4d2b-8439-e139e4e99765.webp',
            '/product-data/530dfc60-9256-4b66-bc77-c798595e3aae.webp',
        ],
        name: 'Cimento Comum CPIV 50kg Votorantim',
        description:
            'Cimento Comum CPIV 50kg Votorantim — Cimento para uso geral. Muito versátil, pode ser utilizado da fundação ao acabamento na obra. Possui secagem rápida e alta resistência. O cimento Todas as Obras é resistente e versátil, desenvolvido pela Votorantim Cimentos para garantir segurança em diversos tipos de obra, sendo indicado para reboco, concreto convencional, contrapiso e lajes.',
        price: 49.9,
        unit: 'un.',
        metadata: [
            { key: 'Altura (cm)', value: '20' },
            { key: 'Pego (g)', value: '50000' },
            { key: 'Largura (cm)', value: '30' },
            { key: 'Comprimento (cm)', value: '50' },
            { key: 'Marca', value: 'Votoran' },
        ],
    },
    {
        slug: 'manta-liquida-18kg-branca-quartzolit',
        ref: '888824236',
        thumbnail_src: '/product-data/380d5ffc-3af6-41a1-8136-9902866951dd.webp',
        images: ['/product-data/380d5ffc-3af6-41a1-8136-9902866951dd.webp'],
        name: 'Manta Líquida Quartzolit 18kg Branca',
        description:
            'Manta líquida 18kg branca Quartzolit — Impermeabilizante flexível e elástico para lajes e coberturas sem trânsito, como lajes de concreto armado, telhas de fibrocimento e telhas cerâmicas. Após a secagem, forma uma membrana de alta resistência química. Indicada para impermeabilizar coberturas de tráfego médio, como lajes de concreto e telhas de fibrocimento. Resistente a raios ultravioleta, chuvas e baixas temperaturas, além de formar uma barreira contra agentes da poluição atmosférica e sonora. A aplicação é simples e, por ser branca, a manta pode ser pigmentada manualmente. Recomenda-se um descanso de 2 horas entre a primeira e a segunda demão para garantir a eficiência da cobertura.',
        price: 299.9,
        unit: 'un.',
        metadata: [
            { key: 'Cor', value: 'Preta' },
            { key: 'Garantia', value: '1 ano' },
            { key: 'Altura (cm)', value: '30' },
            { key: 'Peso (g)', value: '18000' },
            { key: 'Largura (cm)', value: '34' },
            { key: 'Comprimento (cm)', value: '34' },
        ],
    },
    {
        slug: 'floor-nivela-rapido-quartzolit',
        ref: '888807469',
        thumbnail_src: '/product-data/f2d1ec67-4ce2-40fb-88cd-81e807af9632.webp',
        images: ['/product-data/f2d1ec67-4ce2-40fb-88cd-81e807af9632.webp'],
        name: 'Argamassa Autonivelante Nivela Rápido de uso Interno Cinza 20kg Quartzolit',
        description:
            'Argamassa Autonivelante Nivela Rápido de uso Interno Cinza 20kg Quartzolit — Autonivelamento, acabamento liso, alta produtividade e bombeável. Argamassa autonivelante para recuperação e nivelamento de contrapisos e lajes de concreto, ideal para aplicação de pisos laminados, vinílicos, cerâmicas e pedras, indicada para tráfego de pessoas.',
        price: 119.9,
        unit: 'un.',
        metadata: [],
    },
    {
        slug: 'kit-bacia-e-caixa-6lts-zip-branca-incepa',
        ref: 'K888804622',
        thumbnail_src: '/product-data/d9feb730-4ebc-4af8-8cbb-7dac68e8634d.webp',
        images: [
            '/product-data/d9feb730-4ebc-4af8-8cbb-7dac68e8634d.webp',
            '/product-data/40c7db84-19d4-43be-bd7a-94a31b109826.webp',
            '/product-data/f6b9d33f-863b-4e34-bfdd-3d467f3174f4.png',
        ],
        name: 'Vaso Sanitário com Caixa Acoplada 3/6L ZIP Branco Incepa',
        description:
            'Vaso Sanitário com Caixa Acoplada 3/6L ZIP Branco Incepa — Com sistema de descarga Ecoflush, a Caixa Acoplada para Bacia Zip da Incepa foi desenvolvida para oferecer menor custo de instalação, além de proporcionar economia de água com acionamento de 3/6 litros e manutenção simplificada. Este kit contém duas peças: a bacia e a caixa acoplada Zip Incepa 3/6 Litros. Kit de instalação vendido separadamente.',
        price: 399.9,
        unit: 'un.',
        metadata: [
            { key: 'Cor', value: 'Branca' },
            { key: 'Formato da Bacia', value: 'Oval' },
            { key: 'Componenets do Kit', value: 'Bacia Sanitária + Caixa Acoplada' },
            { key: 'Marca', value: 'Incepa' },
            { key: 'Linha', value: 'Zip' },
        ],
    },
    {
        slug: 'argamassa-flexivel-aciii-20kg-cinza-quartzolit',
        ref: '20309661',
        thumbnail_src: '/product-data/b796830f-ddd5-45fc-b2a8-c55aa146edbe.webp',
        images: ['/product-data/b796830f-ddd5-45fc-b2a8-c55aa146edbe.webp'],
        name: 'Argamassa Cimentcola Flexível AC3 Cinza Quartzolit 20kg',
        description:
            'Argamassa Cimentcola Flexível AC3 Cinza Quartzolit 20kg — Alta adesividade e flexibilidade, ideal para fachadas (cerâmicas com absorção de 0,5% a 6%), cerâmicas em concreto, cerâmicas em piscinas aquecidas ou não e saunas. Indicada para o assentamento de revestimentos cerâmicos em áreas internas e externas, incluindo paredes internas, pisos internos e externos, e áreas de tráfego intenso, para cerâmicas de até 80x80cm.',
        price: 46.9,
        unit: 'un.',
        metadata: [],
    },
];
