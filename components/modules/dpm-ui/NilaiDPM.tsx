import { Header } from "@components/typography";
import { NILAI_DPM } from "@constants";
export const NilaiDPM = () => {
    return (
        <div>
            <Header preset="h4" className="text-center">
                Nilai-Nilai DPM UI 2022
            </Header>
            <div className="flex mt-8 gap-16">
                {NILAI_DPM.map(({ logo, text }, index: number) => (
                    <div
                        className="bg-green-1 w-40 h-40 rounded-2xl relative hover:scale-105 transition duration-300 ease-in-out "
                        key={index}
                    >
                        <div className="flex justify-center mt-7"> {logo}</div>
                        <Header preset="h4" className="text-white text-center absolute bottom-3 inset-x-0">
                            {text}
                        </Header>
                    </div>
                ))}
            </div>
        </div>
    );
};
