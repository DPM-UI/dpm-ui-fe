import { BerkasCard, CustomModal } from "@components";
import { Header } from "@components";
import { Berkas, User } from "@models";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useDisclosure } from "@chakra-ui/react";
import Paper from "@images/paper-illustration.svg";
import Folder from "@images/folder-illustration.svg";
type NotulaSectionProps = {
    notulaData?: Berkas[];
    user: User;
    jwt: string;
};
export const NotulaSection = ({ notulaData, user, jwt }: NotulaSectionProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div
            className={`mt-52 bg-[#e0f8f4] ${
                notulaData ? (notulaData.length > 5 ? "h-full" : "h-[80vh]") : ""
            } pb-52 relative`}
        >
            <div className="pt-14">
                <div className="relative">
                    <div className="flex gap-4 justify-center items-center">
                        <Header preset="h2" className="text-blue-2 text-center">
                            Notula
                        </Header>
                        {user ? (
                            <PlusCircleIcon className="w-10 h-10 fill-green-1 cursor-pointer" onClick={onOpen} />
                        ) : null}
                    </div>

                    <Folder className="absolute top-0 left-10" />
                    <Paper className="absolute top-40 right-40" />
                </div>

                <div className="flex flex-col items-center mt-8 gap-2 relative">
                    {notulaData?.map((notula, index) => (
                        <BerkasCard
                            title={notula.nama}
                            berkasUrl={notula.url}
                            isEven={index % 2 == 0}
                            isLoading={false}
                            key={index}
                            jwt={jwt}
                            user={user}
                            id={notula.id}
                            product="Notula"
                            target="notula-publik"
                        />
                    ))}
                </div>
                <Folder className="absolute bottom-10 right-32" style={{ transform: `scaleX(-1)` }} />
                <Paper className="absolute bottom-40  left-52 " style={{ transform: `scaleX(-1)` }} />
                <CustomModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title={"Tambah Notula"}
                    productTitle="Judul Notula"
                    isAdd={true}
                    jwt={jwt}
                    successMessage={"Notula berhasil ditambahkan"}
                    target={"notula-publik"}
                />
            </div>
        </div>
    );
};
