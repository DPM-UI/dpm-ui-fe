import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "@icons/ic_chevron_left.svg";
import ChevronRightIcon from "@icons/ic_chevron_right.svg";
import { Header, ImageModal } from "@components";
type PhotosCarouselProps = {
    name: string;
    photoUrls: string[];
};

export const PhotosCarousel = ({ name, photoUrls }: PhotosCarouselProps) => {
    const settings: any = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 3,
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
            <Slider {...settings} className="mx-20 mt-4">
                {photoUrls.map((photoUrl: any, index: number) => (
                    <ImageModal key={index} url={photoUrl} />
                ))}
            </Slider>
        </div>
    );
};
