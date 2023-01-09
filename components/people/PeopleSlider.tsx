import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ChevronLeftIcon from "@icons/ic_chevron_left.svg";
import ChevronRightIcon from "@icons/ic_chevron_right.svg";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import { PeopleSliderFrame, AnggotaShowcase } from "@components";
import { Anggota } from "@models";
type PeopleSliderProps = {
    members: Anggota[];
    name: string;
};
export const PeopleSlider = ({ members, name }: PeopleSliderProps) => {
    return (
        <div className="relative w-56">
            <Swiper
                className="catalog-carousel"
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: `.button-previous-${name}`,
                    nextEl: `.button-next-${name}`,
                }}
            >
                {members.map((member: Anggota, index: number) => (
                    <SwiperSlide className="flex justify-center absolute" key={index}>
                        <PeopleSliderFrame anggota={member} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`button-previous-${name} absolute desktop:left-0 desktop:-bottom-2 mobile:bottom-8 mobile:left-3  flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
            >
                <ChevronLeftIcon className="w-full h-full" />
            </div>

            <div
                className={`button-next-${name} absolute desktop:-right-10  desktop:-bottom-2 mobile:bottom-8 mobile:right-0   flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
            >
                <ChevronRightIcon className="w-full h-full" />
            </div>
        </div>
    );
};
