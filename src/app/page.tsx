import { BannerOutHistory } from '@/components/banners';
import { IndexBanners } from '@/components/index-banners';
import { Footer, Header } from '@/components/layout';
import { ProductsList } from '@/components/products/products-list';
import { ServicesSection } from '@/components/services-section';
import { products } from '@/data/products';

export default () => {
    return (
        <>
            <Header />
            <main className="space-y-6">
                <IndexBanners />
                <ServicesSection />
                <div className="max-w-5xl mx-auto px-6">
                    <ProductsList data={products} />
                </div>
                <BannerOutHistory />
            </main>
            <Footer />
        </>
    );
};
