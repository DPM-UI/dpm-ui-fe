import { Header, Body } from "@components/typography";
import { FUNGSI_DPM } from "@constants";
export const FungsiDPM = () => {
    return (
        <div className="mb-14">
            <Header preset="h4" className="text-center">
                Nilai-Nilai DPM UI 2022
            </Header>
            <div className="flex mt-8 gap-16">
                {FUNGSI_DPM.map(({ logo, text, title }, index: number) => (
                    <div className="flex flex-col gap-5" key={index}>
                        <div className=""> {logo}</div>
                        <Header preset="h4" className="">
                            {title}
                        </Header>
                        <Header preset="regular" className="text-grey w-48">
                            {text}
                        </Header>
                    </div>
                ))}
            </div>
        </div>
    );
};
