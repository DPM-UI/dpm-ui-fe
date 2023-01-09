import { Header, Body } from "@components/typography";
import { FUNGSI_DPM } from "@constants";
export const FungsiDPM = () => {
    return (
        <div className="">
            <Header preset="h3" className="text-center text-blue-2">
                Fungsi DPM UI 2022
            </Header>
            <div className="flex desktop:flex-row mobile:flex-col mt-8 gap-16">
                {FUNGSI_DPM.map(({ logo, text, title }, index: number) => (
                    <div className="flex flex-col gap-5 desktop:items-start mobile:items-center" key={index}>
                        <div className=""> {logo}</div>
                        <Header preset="h4" className="desktop:text-left mobile:text-center">
                            {title}
                        </Header>
                        <Header preset="regular" className="text-grey w-48 desktop:text-left mobile:text-center">
                            {text}
                        </Header>
                    </div>
                ))}
            </div>
        </div>
    );
};
