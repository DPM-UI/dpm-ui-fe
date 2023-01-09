import { Header, DeleteModal, LpjModal } from "@components";
import { User } from "@models";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDisclosure } from "@chakra-ui/react";

type LPJCardProps = {
    nama: string;
    imageUrl: string;
    url: string;
    user: User;
    jwt: string;
    id: number;
};

export const LpjCard = ({ nama, imageUrl, url, user, jwt, id }: LPJCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    return (
        <div className="p-6 border border-blue-1 rounded-lg bg-white h-52 w-[380px]">
            <div className="flex gap-4 relative">
                <div className="w-[120px] ">
                    <img src={imageUrl} className="w-full h-[160px] rounded-[6px]" />
                </div>

                <div className=" flex flex-col justify-between flex-1 flex-wrap">
                    <Header preset="h4" className="text-blue-2">
                        {nama}
                    </Header>
                    <Link href={url}>
                        <a>
                            <Header preset="regular" className="text-green-1 font-bold underline">
                                Lihat berkas
                            </Header>
                        </a>
                    </Link>
                </div>
                {user ? (
                    <>
                        <div className="flex gap-2 absolute right-0 mt-1">
                            <PencilIcon className="h-5 w-5 stroke-green-1 cursor-pointer" onClick={onOpen} />
                            <TrashIcon className="h-5 w-5 stroke-green-1 cursor-pointer" onClick={onOpenDelete} />
                        </div>
                        <DeleteModal
                            isOpen={isOpenDelete}
                            onClose={onCloseDelete}
                            title={"Hapus LPJ"}
                            body={"Apakah kamu yakin ingin menghapus LPJ ini?"}
                            jwt={jwt ? jwt : ""}
                            target={"lpj"}
                            id={id}
                        />
                        <LpjModal
                            isOpen={isOpen}
                            onClose={onClose}
                            title={"Edit LPJ"}
                            productTitle="Judul LPJ"
                            isAdd={false}
                            jwt={jwt}
                            successMessage={"Perubahan berhasil disimpan"}
                            target={"lpj"}
                            id={id}
                        />
                    </>
                ) : null}
            </div>
        </div>
    );
};
