import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const IndexBanners = () => {
    return (
        <section id="banners" className="bg-muted border-b">
            <Carousel className="max-w-5xl mx-auto relative" opts={{ loop: true }}>
                <CarouselContent>
                    {Array.from({ length: 4 }).map((_, k) => (
                        <CarouselItem key={k}>
                            <img
                                src="https://fakeimg.pl/1000x400/f5f4f4/909090"
                                className="size-full aspect-[5/2] object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        </section>
    );
};

export { IndexBanners };
