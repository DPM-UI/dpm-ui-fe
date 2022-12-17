import { Anggota } from "@models";
import { Header } from "@components";
type PeopleSliderFrameProps = {
    anggota: Anggota;
};

export const PeopleSliderFrame = ({ anggota }: PeopleSliderFrameProps) => {
    return (
        <div className="w-56 flex flex-col relative ">
            <div className="rounded-full w-44 h-44 bg-gradient-to-b from-[#3ACAAF] to-[#CEF8FF] absolute left-8 top-6 "></div>
            <div className=" relative -left-10 -top-4 w-64 h-48 scale-[.6]">{anggota.image}</div>
            <div className="mt-6 ">
                <Header preset="h4" className="text-blue-2 text-center">
                    {anggota.position}
                </Header>
            </div>
            <div className="text-center text-grey">
                <Header preset="regular" className="font-bold">
                    {anggota.name}
                </Header>
                <Header preset="regular">{anggota.faculty}</Header>
            </div>
        </div>
    );
};
