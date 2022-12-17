import { Header, CustomModal, DeleteModal } from "@components";
import Link from "next/link";
import { Skeleton, useDisclosure } from "@chakra-ui/react";
import { User } from "@models";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
type BerkasCardProps = {
    title: string;
    berkasUrl: string;
    isEven: boolean;
    isLoading: boolean;
    user?: User;
    jwt?: string;
    id?: number;
    target: string;
    product: string;
};

export const BerkasCard = ({
    title,
    berkasUrl,
    isEven,
    isLoading,
    user,
    jwt,
    id,
    target,
    product,
}: BerkasCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    return (
        <div
            className={`h-[60px] w-1/2 rounded-lg border border-blue-2 py-2.5 px-4 ${
                isEven ? "bg-white" : "bg-green-pastel/40"
            }`}
        >
            <Skeleton isLoaded={!isLoading}>
                <div className="flex justify-between items-center mt-2">
                    <Header preset="regular" className="text-blue-2 font-bold">
                        {title}
                    </Header>
                    <div className="flex gap-4">
                        <Link href={berkasUrl}>
                            <a>
                                <Header preset="regular" className="text-green-1 font-black underline">
                                    Lihat berkas
                                </Header>{" "}
                            </a>
                        </Link>
                        {user ? (
                            <>
                                <PencilIcon className="w-6 h-6 stroke-green-1 cursor-pointer" onClick={onOpen} />
                                <TrashIcon className="w-6 h-6 stroke-green-1 cursor-pointer" onClick={onOpenDelete} />
                            </>
                        ) : null}
                        <DeleteModal
                            isOpen={isOpenDelete}
                            onClose={onCloseDelete}
                            title={"Hapus Berkas"}
                            body={"Apakah kamu yakin ingin menghapus berkas ini?"}
                            jwt={jwt ? jwt : ""}
                            target={target}
                            id={id}
                        />
                        <CustomModal
                            isOpen={isOpen}
                            onClose={onClose}
                            title={`Edit ${product}`}
                            productTitle={`Judul ${product}`}
                            isAdd={false}
                            jwt={jwt ? jwt : ""}
                            successMessage={`Perubahan berhasil disimpan`}
                            target={target}
                            id={id}
                        />
                    </div>
                </div>
            </Skeleton>
        </div>
    );
};
