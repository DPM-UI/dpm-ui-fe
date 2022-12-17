// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/bundle";
// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ChevronLeftIcon from "@icons/ic_chevron_left.svg";
import ChevronRightIcon from "@icons/ic_chevron_right.svg";
import Slider from "react-slick";
// SwiperCore.use([Autoplay, Pagination, Navigation]);

type PhotosCarouselProps = {
    name: string;
    photoUrls: string[];
};

export const PhotosCarousel = ({ name, photoUrls }: PhotosCarouselProps) => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "w-20",
    };
    return (
        <div className="">
            <div className="relative">
                {/* <Carousel> */}
                <Slider {...settings}>
                    <div>2</div>
                    <div>3</div>
                </Slider>
                {/* </Carousel> */}

                {/* <div
                    className={`button-previous-${name} absolute desktop:-left-10 desktop:top-[50%]  z-50 flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
                >
                    <ChevronLeftIcon className="w-full h-full" />
                </div>
                <div
                    className={`button-next-${name} absolute desktop:-right-20  desktop:top-[50%]  z-50 flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
                >
                    <ChevronRightIcon className="w-full h-full" />
                </div> */}
            </div>
        </div>
    );
};
