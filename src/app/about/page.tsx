'use client';

import { BannerContact } from '@/components/banners';
import { Footer, Header } from '@/components/layout';
import { motion, MotionProps } from 'motion/react';

const images = [
    {
        src: '/static/images/history-photos/photo_001.jpg',
        alt: 'Foto de dois fundadores sorrindo e apertando as mãos em um pequeno escritório.',
    },
    {
        src: '/static/images/history-photos/photo_002.jpg',
        alt: 'Foto aérea de um centro de distribuição moderno com caminhões sendo carregados.',
    },
];

export default () => {
    const props: MotionProps = {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { ease: 'easeOut' },
        viewport: { once: true },
    };

    return (
        <>
            <Header />
            <main>
                <div className="max-w-5xl mx-auto px-6 py-10">
                    <h1 className="text-center text-3xl font-medium">Nossa História</h1>
                </div>
                <div className="max-w-5xl mx-auto px-6 grid">
                    <motion.div {...props} className="h-[50vh] flex items-center gap-8 flex-wrap">
                        <div className="flex-1 text-justify text-muted-foreground space-y-4">
                            <p>
                                A Compra Certa surgiu em 2018 com o objetivo de tornar a compra de materiais de
                                construção mais fácil, acessível e confiável para todos. Com experiência no setor e
                                visão digital, os fundadores queriam unir o melhor do varejo físico e online.
                            </p>
                            <p>
                                Começamos em um galpão modesto no interior do Rio Grande do Sul, vendendo 500 produtos
                                com uma equipe enxuta. O bom atendimento e a agilidade nas entregas logo chamaram
                                atenção e a marca ganhou força na região.
                            </p>
                        </div>
                        <div className="aspect-[16/9] rounded-md flex-1 overflow-hidden">
                            <img src={images[0].src} alt={images[0].alt} />
                        </div>
                    </motion.div>
                    <motion.div {...props} className="h-[50vh] flex items-center gap-8 flex-wrap">
                        <div className="aspect-[16/9] rounded-md flex-1 overflow-hidden">
                            <img src={images[1].src} alt={images[1].alt} />
                        </div>
                        <div className="flex-1 text-justify text-muted-foreground space-y-4">
                            <p>
                                A operação cresceu, os centros de distribuição se multiplicaram e o portfólio passou a
                                contar com mais de 15 mil itens. Hoje, atendemos todo o Brasil com entregas rápidas e
                                suporte técnico especializado.
                            </p>
                            <p>
                                Nossa missão é facilitar a vida de quem constrói, seja profissional ou pessoa comum,
                                oferecendo uma experiência de compra simples, transparente e com atendimento humano.
                            </p>
                        </div>
                    </motion.div>
                    <div className="h-[50vh] flex items-center">
                        <motion.p {...props} className="text-3xl text-center text-balance">
                            "O futuro da Compra Certa está em <b>crescer com propósito</b>. Inovamos para estar ao lado
                            de quem transforma, ajudando a realizar sonhos tijolo por tijolo."
                        </motion.p>
                    </div>
                </div>
                <BannerContact />
            </main>
            <Footer />
        </>
    );
};
