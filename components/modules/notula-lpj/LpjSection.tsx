import { useState } from "react";
import { LPJ, User } from "@models";
import { Header, LpjCard } from "@components";
import { PlusCircleIcon } from "@heroicons/react/solid";
type LpjSectionProps = {
    lpjData?: LPJ[];
    user: User;
};
export const LpjSection = ({ lpjData, user }: LpjSectionProps) => {
    const [numberShow, setNumberShow] = useState<number | undefined>(6);
    return (
        <div className="mt-16 mx-12">
            <div className="flex gap-4 justify-center items-center">
                <Header preset="h2" className="text-center text-blue-2">
                    LPJ
                </Header>
                {user ? <PlusCircleIcon className="w-10 h-10 fill-green-1 cursor-pointer" /> : null}
            </div>

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
