import { BerkasCard, CustomModal } from "@components";
import { Header } from "@components";
import { Berkas, User } from "@models";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useDisclosure } from "@chakra-ui/react";

type NotulaSectionProps = {
    notulaData?: Berkas[];
    user: User;
    jwt: string;
};
export const NotulaSection = ({ notulaData, user, jwt }: NotulaSectionProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div
            className={` ${
                notulaData ? (notulaData.length > 5 ? "h-full" : "desktop:h-[80vh]") : ""
            } desktop:pb-52 mobile:pb-24 relative`}
        >
            <div className="pt-14 desktop:mx-0 mobile:mx-7">
                <div className="relative">
                    <div className="flex gap-4 justify-center items-center">
                        <Header preset="h2" className="text-blue-2 text-center">
                            Notula
                        </Header>
                        {user ? (
                            <PlusCircleIcon className="w-10 h-10 fill-green-1 cursor-pointer" onClick={onOpen} />
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-col items-center mt-8 gap-4 relative ">
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
