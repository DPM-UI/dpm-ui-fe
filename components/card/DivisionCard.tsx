import { Header, PeopleSliderFrame, PeopleSlider } from "@components";
import { Division } from "@models";
type DivisionCard = {
    komisi: Division;
};
export const DivisionCard = ({ komisi }: DivisionCard) => {
    return (
        <div className="w-full bg-white h-80 rounded-3xl pl-10 pr-16 flex gap-14 shadow-xl">
            <div>
                {komisi.members.length > 1 ? (
                    <PeopleSlider members={komisi.members} name={komisi.name.split(" ")[1]} />
                ) : (
                    // <div></div>
                    <PeopleSliderFrame anggota={komisi.members[0]} />
                )}
            </div>
            <div className="py-20">
                <Header preset="h2" className="text-blue-2">
                    {komisi.name}
                </Header>
                <Header preset="regular" className="mt-2 text-grey-dark">
                    {komisi.description}
                </Header>
            </div>
        </div>
    );
};
