import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ChevronLeftIcon from "@icons/ic_chevron_left.svg";
import ChevronRightIcon from "@icons/ic_chevron_right.svg";
import Image from "next/image";
SwiperCore.use([Autoplay, Pagination, Navigation]);

type PhotoCarouselProps = {
    page: string;
    imageUrls: string[];
};
export const PhotoCarousel = ({ page, imageUrls }: PhotoCarouselProps) => {
    return (
        <div className="relative desktop:w-[632px] desktop:h-[500px]">
            <Swiper
                className="catalog-carousel"
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: `.button-previous-${page}`,
                    nextEl: `.button-next-${page}`,
                }}
            >
                {imageUrls.map((imgUrl: string, index: number) => (
                    <SwiperSlide className="flex justify-center  absolute mb-4" key={index}>
                        <Image src={imgUrl} width={632} height={422} className="rounded-xl" alt="carousel"></Image>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`button-previous-${page} absolute desktop:left-[40%] desktop:-bottom-9 mobile:-bottom-8 mobile:left-24 flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
            >
                <ChevronLeftIcon className="w-full h-full" />
            </div>

            <div
                className={`button-next-${page} absolute desktop:right-[34%]  desktop:-bottom-9 mobile:-bottom-8 mobile:right-[84px] flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
            >
                <ChevronRightIcon className="w-full h-full" />
            </div>
        </div>
    );
};
