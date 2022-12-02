import { useEffect, useState } from "react";
import { LPJ } from "@models";
import { Header, LpjCard } from "@components";
type LpjSectionProps = {
    lpjData?: LPJ[];
};
export const LpjSection = ({ lpjData }: LpjSectionProps) => {
    const [numberShow, setNumberShow] = useState<number | undefined>(6);
    return (
        <div className="mt-16 mx-12">
            <Header preset="h2" className="text-center text-blue-2">
                LPJ
            </Header>
            <div
                className={`mt-8 grid grid-cols-3 gap-2 ${
                    lpjData ? (lpjData.length > 3 ? "grid-rows-2" : "grid-rows-1") : ""
                }`}
            >
                {lpjData?.slice(0, numberShow).map((lpj, index) => (
                    <LpjCard nama={lpj.nama} url={lpj.url} imageUrl={lpj.imageUrl} key={index} />
                ))}
            </div>
            <div className="mt-8">
                <Header preset="regular" className="font-bold underline text-green-1 text-center cursor-pointer">
                    <div onClick={() => setNumberShow(lpjData?.length)}>Tampilkan semua</div>
                </Header>
            </div>
        </div>
    );
};
