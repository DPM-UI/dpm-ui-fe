import { useState } from "react";
import { LPJ, User } from "@models";
import { useDisclosure } from "@chakra-ui/react";
import { Header, LpjCard, LpjModal } from "@components";
import { PlusCircleIcon } from "@heroicons/react/solid";
type LpjSectionProps = {
    lpjData?: LPJ[];
    user: User;
    jwt: string;
};
export const LpjSection = ({ lpjData, user, jwt }: LpjSectionProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [numberShow, setNumberShow] = useState<number | undefined>(6);
    return (
        <div className="pt-16 px-12 from-[#CEF8FF] to-[#B3F8EB] bg-gradient-to-tr ">
            <div className="flex gap-4 justify-center items-center">
                <Header preset="h2" className="text-center text-blue-2">
                    LPJ
                </Header>
                {user ? <PlusCircleIcon className="w-10 h-10 fill-green-1 cursor-pointer" onClick={onOpen} /> : null}
                <LpjModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title={"Tambah LPJ"}
                    productTitle="Judul LPJ"
                    isAdd={true}
                    jwt={jwt}
                    successMessage={"LPJ berhasil ditambahkan"}
                    target={"lpj"}
                />
            </div>

            <div
                className={`mt-8 flex justify-center gap-2 flex-wrap ${
                    lpjData ? (lpjData.length > 3 ? "grid-rows-2" : "grid-rows-1") : ""
                }`}
            >
                {lpjData?.slice(0, numberShow).map((lpj, index) => (
                    <LpjCard
                        nama={lpj.nama}
                        url={lpj.url}
                        imageUrl={lpj.imageUrl}
                        key={index}
                        user={user}
                        jwt={jwt}
                        id={lpj.id}
                    />
                ))}
            </div>
            <div className="py-8">
                <Header preset="regular" className="font-bold underline text-green-2 text-center cursor-pointer">
                    <div onClick={() => setNumberShow(lpjData?.length)}>Tampilkan semua</div>
                </Header>
            </div>
        </div>
    );
};
