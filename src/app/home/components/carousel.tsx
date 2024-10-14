'use client'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import React from 'react';
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button';
import { Icons, iconVariants } from '@/components/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image'

const CarouselBanner = () => {
    const [emblaApi, setEmblaApi] = React.useState<CarouselApi>()

    const plugin = React.useRef(
        Autoplay({ delay: 100000, stopOnInteraction: true })
    )
    return (
        <div className="slider-container">
            <Carousel
                setApi={setEmblaApi}
                plugins={[plugin.current]}
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}
                opts={{
                    align: 'start',
                    loop: true,
                    dragFree: false,
                }}
                className="w-full"
            >
                <CarouselContent>
                    <CarouselItem>
                        <Image
                            src="/images/banner1.png"
                            width={390}
                            height={220}
                            alt="Picture of the author"
                            className="w-full"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src="/images/banner2.png"
                            width={390}
                            height={220}
                            alt="Picture of the author"
                            className="w-full"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src="/images/banner3.png"
                            width={390}
                            height={220}
                            alt="Picture of the author"
                            className="w-full"
                        />
                    </CarouselItem>
                </CarouselContent>
                <Button
                    onClick={() => emblaApi?.scrollNext()}
                    disabled={!emblaApi?.canScrollNext}
                    size={'icon'}
                    variant={'link'}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full z-10"
                >
                    <Icons.ChevronRight
                        className={cn(
                            iconVariants({ size: 'xl' }),
                            'text-white transition-transform hover:scale-110'
                        )}
                    />
                </Button>

                <Button
                    onClick={() => emblaApi?.scrollPrev()}
                    disabled={!emblaApi?.canScrollPrev}
                    size={'icon'}
                    variant={'link'}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full z-10"
                >
                    <Icons.ChevronLeft
                        className={cn(
                            iconVariants({ size: 'xl' }),
                            'text-white transition-transform hover:scale-110'
                        )}
                    />
                </Button>
            </Carousel>
        </div>
    );
}

export default CarouselBanner