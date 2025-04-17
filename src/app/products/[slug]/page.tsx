import { Footer, Header } from '@/components/layout';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

export default async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) notFound();

    return (
        <>
            <Header />
            <main className="space-y-6">
                <div className="px-6 max-w-5xl mx-auto">{JSON.stringify(product)}</div>
            </main>
            <Footer />
        </>
    );
};
