import { Header } from "..";
type DivisiFrameProps = {
    image: any;
    position: string;
    name: string;
    faculty: string;
};
export const DivisiFrame = ({ image, position, name, faculty }: DivisiFrameProps) => {
    return (
        <div className="flex flex-col items-center desktop:h-auto mobile:h-20 ">
            <div className="absolute desktop:-top-[77px] mobile:-top-[31px] desktop:scale-[0.9] mobile:scale-[0.6]">
                <img src={image} className="" />
            </div>
            <div className="flex justify-center gap-2">
                <Header preset="h4" className="text-blue-2 desktop:-bottom-10 mobile:bottom-12 absolute flex  ">
                    {position}
                </Header>
                <div className="absolute desktop:-bottom-24 mobile:bottom-1  text-grey">
                    <Header preset="h4">{name}</Header>
                    <Header preset="regular" className="text-center">
                        {faculty}
                    </Header>
                </div>
            </div>
        </div>
    );
};
