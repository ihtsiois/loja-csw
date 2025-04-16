import { IndexBanners } from '@/components/index-banners';
import { Header } from '@/components/layout';
import { ServicesSection } from '@/components/services-section';

export default () => {
    return (
        <>
            <Header />
            <IndexBanners />
            <ServicesSection />
        </>
    );
};
