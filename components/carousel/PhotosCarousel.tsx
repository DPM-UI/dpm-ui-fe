import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "@icons/ic_chevron_left.svg";
import ChevronRightIcon from "@icons/ic_chevron_right.svg";
import { Header, ImageModal } from "@components";
import { useBreakpoint } from "@chakra-ui/react";
type PhotosCarouselProps = {
    name: string;
    photoUrls: string[];
};

export const PhotosCarousel = ({ name, photoUrls }: PhotosCarouselProps) => {
    const breakpoint = useBreakpoint({ ssr: false });
    console.log(breakpoint);
    const settings: any = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: breakpoint === "base" ? 1 : 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        nextArrow: <ChevronRightIcon />,
        prevArrow: <ChevronLeftIcon />,
    };
    return (
        <div className="">
            <Header preset="h4" className="text-grey-dark text-center mt-12">
                {name}
            </Header>
            <Slider {...settings} className="desktop:mx-20 mobile:mx-10 mt-4">
                {photoUrls.map((photoUrl: any, index: number) => (
                    <ImageModal key={index} url={photoUrl} />
                ))}
            </Slider>
        </div>
    );
};
