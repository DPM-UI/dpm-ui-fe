import { Header } from "@components/typography";
import { NILAI_DPM } from "@constants";
export const NilaiDPM = () => {
    return (
        <div>
            <Header preset="h3" className="text-center text-blue-2">
                Nilai-Nilai DPM UI 2022
            </Header>
            <div className="flex mt-8 desktop:gap-16 mobile:gap-6">
                {NILAI_DPM.map(({ logo, text }, index: number) => (
                    <div
                        className="bg-blue-1 desktop:w-40 desktop:h-40 mobile:h-24 mobile:w-24 rounded-2xl relative hover:scale-105 transition duration-300 ease-in-out "
                        key={index}
                    >
                        <div className="flex justify-center mt-7 desktop:w-auto desktop:h-auto mobile:w-full mobile:h-8 ">
                            <img src={logo} />
                        </div>
                        <Header preset="h4" className="text-white text-center absolute bottom-3 inset-x-0">
                            {text}
                        </Header>
                    </div>
                ))}
            </div>
        </div>
    );
};
