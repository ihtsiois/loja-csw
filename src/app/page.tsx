import { IndexBanners } from '@/components/index-banners';
import { Header } from '@/components/layout';
import { ProductsList } from '@/components/products/products-list';
import { ServicesSection } from '@/components/services-section';

export default () => {
    return (
        <>
            <Header />
            <main className="space-y-6">
                <IndexBanners />
                <ServicesSection />
                <div className="max-w-5xl mx-auto px-6">
                    <ProductsList />
                </div>
            </main>
        </>
    );
};
