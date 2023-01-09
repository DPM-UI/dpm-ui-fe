import { Header, PeopleSliderFrame, PeopleSlider, Button } from "@components";
import { Division } from "@models";
import { useState } from "react";
type DivisionCard = {
    komisi: Division;
};
export const DivisionCard = ({ komisi }: DivisionCard) => {
    const [isDescOpen, setIsDescOpen] = useState<boolean>(false);
    return (
        <div className="w-full bg-white desktop:h-80 mobile:h-full desktop:pb-0 mobile:pb-6 rounded-3xl desktop:pl-10 desktop:pr-16 flex desktop:flex-row mobile:flex-col desktop:items-start mobile:items-center desktop:gap-14 shadow-xl  ">
            <Header preset="h2" className="text-blue-2 mobile::block desktop:hidden desktop:mt-0 mobile:mt-6">
                {komisi.name}
            </Header>
            <div>
                {komisi.members.length > 1 ? (
                    <PeopleSlider members={komisi.members} name={komisi.name.split(" ")[1]} />
                ) : (
                    // <div></div>
                    <PeopleSliderFrame anggota={komisi.members[0]} />
                )}
            </div>
            <div className="desktop:py-20">
                <Header preset="h2" className="text-blue-2 desktop:block mobile:hidden">
                    {komisi.name}
                </Header>

                <Header
                    preset="regular"
                    className={`mt-2 text-grey-dark desktop:block mobile:mx-4 desktop:mx-0 mobile:text-justify desktop:text-left ${
                        isDescOpen ? "mobile:block" : "mobile:hidden"
                    }`}
                >
                    {komisi.description}
                </Header>
                <div className="mobile:flex justify-center desktop:hidden  mt-6">
                    <Button preset="primary" onClick={() => setIsDescOpen(!isDescOpen)}>
                        {isDescOpen ? "Close" : "Read more"}
                    </Button>
                </div>
            </div>
        </div>
    );
};
