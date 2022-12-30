import { Header, BerkasCard, Footer, CustomModal, InputFieldFormik } from "@components";
import ProdukHukumIllustration from "@images/produk_hukum_illustration.svg";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useDisclosure } from "@chakra-ui/react";
import { Berkas, User } from "@models";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";

const ProdukHukum = ({ user, jwt }: { user: User; jwt: string }) => {
    const [produkHukum, setProdukHukum] = useState<Berkas[]>();
    const [produkHukumLoading, setProdukHukumLoading] = useState<boolean>(true);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        axios.get("/api/produk-hukum").then((response) => {
            setProdukHukum(response.data);
            setProdukHukumLoading(false);
        });
    }, [produkHukum]);

    return (
        <>
            <div className="mt-10 pb-52 mx-20 ">
                <div className="flex items-center gap-4 justify-center">
                    <Header preset="h1" className="text-blue-2 text-center">
                        Produk Hukum
                    </Header>
                    {user ? (
                        <PlusCircleIcon className="w-10 h-10 fill-green-1 cursor-pointer" onClick={onOpen} />
                    ) : null}
                </div>
                <CustomModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title={"Tambah Produk Hukum"}
                    productTitle="Judul Produk Hukum"
                    isAdd={true}
                    jwt={jwt}
                    successMessage={"Produk Hukum berhasil ditambahkan"}
                    target={"produk-hukum"}
                />

                <div className="flex justify-center flex-col items-center gap-4 mt-8 relative">
                    {produkHukum?.map((produk, index: number) => (
                        <BerkasCard
                            id={produk.id}
                            title={produk.nama}
                            berkasUrl={produk.url}
                            isEven={index % 2 == 0}
                            key={index}
                            isLoading={false}
                            user={user}
                            jwt={jwt}
                            target="produk-hukum"
                            product="Produk Hukum"
                        />
                    ))}
                </div>
                <ProdukHukumIllustration className="absolute left-40 top-40" />
                <ProdukHukumIllustration className="absolute right-40 bottom-80" style={{ transform: `scaleX(-1)` }} />
            </div>
            <Footer user={user} />
        </>
    );
};
export const getServerSideProps = async (ctx: NextPageContext) => {
    const cookies = nookies.get(ctx);
    const jwt = cookies.jwt ? cookies.jwt : "";
    let user = null;

    if (cookies?.jwt) {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BE}/doorpathmain`, {
                headers: {
                    Cookie: `${cookies.jwt}`,
                },
            });
            user = data;
        } catch (e) {
            console.log(e);
        }
    }

    return {
        props: {
            user,
            jwt,
        },
    };
};
export default ProdukHukum;
