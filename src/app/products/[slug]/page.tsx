import { notFound } from 'next/navigation';
import { Footer, Header } from '@/components/layout';
import { ProductCTA } from '@/components/products/product-cta';
import { ProductImages } from '@/components/products/product-images';
import { products } from '@/data/products';
import { ProductDescription } from '@/components/products/product-description';
import { ProductMetadata } from '@/components/products/product-metadata';

export default async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) notFound();

    return (
        <>
            <Header />
            <main className="p-6 max-w-5xl mx-auto space-y-8">
                <div className="grid grid-cols-2 gap-6">
                    <ProductImages product={product} />
                    <ProductCTA product={product} />
                </div>
                <ProductDescription product={product} />
                <ProductMetadata product={product} />
            </main>
            <Footer />
        </>
    );
};
