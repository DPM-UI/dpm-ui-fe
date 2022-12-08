import { Header, BerkasCard, Footer } from "@components";
import ProdukHukumIllustration from "@images/produk_hukum_illustration.svg";
import { useEffect, useState } from "react";

import { Berkas, User } from "@models";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";

const ProdukHukum = ({ user }: { user: User }) => {
    const [produkHukum, setProdukHukum] = useState<Berkas[]>();
    const [produkHukumLoading, setProdukHukumLoading] = useState<boolean>(true);
    useEffect(() => {
        axios.get("/api/produk-hukum").then((response) => {
            setProdukHukum(response.data);
            setProdukHukumLoading(false);
        });
    }, []);

    return (
        <>
            <div className="mt-10 pb-52 mx-20 ">
                <Header preset="h1" className="text-blue-2 text-center">
                    Produk Hukum
                </Header>
                <div className="flex justify-center flex-col items-center gap-2 mt-8 relative">
                    {produkHukumLoading ? (
                        <>
                            <BerkasCard title={""} berkasUrl={""} isEven={true} isLoading={true} />
                            <BerkasCard title={""} berkasUrl={""} isEven={false} isLoading={true} />
                        </>
                    ) : (
                        produkHukum?.map((produk, index: number) => (
                            <BerkasCard
                                title={produk.nama}
                                berkasUrl={produk.url}
                                isEven={index % 2 == 0}
                                key={index}
                                isLoading={false}
                            />
                        ))
                    )}
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
        },
    };
};
export default ProdukHukum;
