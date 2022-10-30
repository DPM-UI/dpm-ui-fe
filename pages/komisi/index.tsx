import type { NextPage } from "next";
import { DivisionCard, Header } from "@components";
import { KOMISI } from "@constants";
const Komisi: NextPage = () => {
    return (
        <div className="pb-24">
            <div className="h-32 bg-gradient-to-r from-[#2C8EBF] to-[#47D6C9]">
                <Header preset="h1" className="text-white text-center pt-9 pb-4">
                    Komisi DPM UI 2022
                </Header>
            </div>
            <div className="mt-10 flex flex-col gap-16 mx-32">
                {KOMISI.map((komisi, index: number) => (
                    <div key={index}>
                        <DivisionCard komisi={komisi} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Komisi;
