import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ChevronLeftIcon from "@icons/ic_chevron_left.svg";
import ChevronRightIcon from "@icons/ic_chevron_right.svg";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import { DivisiFrame } from "@components";
import { Anggota } from "@models";
type DivisiSliderProps = {
    members: Anggota[];
    name: string;
};
export const DivisiSlider = ({ members, name }: DivisiSliderProps) => {
    return (
        <div className=" w-full relative">
            <Swiper
                className="h-56 relative"
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: `.button-previous-${name}`,
                    nextEl: `.button-next-${name}`,
                }}
            >
                {members.map((member: Anggota, index: number) => (
                    <SwiperSlide className="flex justify-center relative" key={index}>
                        <DivisiFrame
                            key={index}
                            image={member.image}
                            faculty={member.faculty}
                            name={member.name}
                            position={member.position}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`button-previous-${name} absolute desktop:left-0 desktop:-bottom-2 mobile:bottom-28 mobile:-left-8  flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
            >
                <ChevronLeftIcon className="w-full h-full" />
            </div>

            <div
                className={`button-next-${name} absolute desktop:-right-10  desktop:-bottom-2 mobile:bottom-28 mobile:-right-11  flex items-center mobile:w-6 tablet:w-10 desktop:w-12 cursor-pointer`}
            >
                <ChevronRightIcon className="w-full h-full" />
            </div>
        </div>
    );
};
