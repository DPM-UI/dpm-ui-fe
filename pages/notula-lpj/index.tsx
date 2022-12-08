import { useEffect, useState } from "react";
import { Header, LpjSection, NotulaSection, Footer } from "@components";
import axios from "axios";
import nookies from "nookies";
import { NextPageContext } from "next";
import { LPJ, Berkas, User } from "@models";

const NotulaLPJ = ({ user }: { user: User }) => {
    const [lpjData, setLpjData] = useState<LPJ[]>();
    const [lpjDataLoading, setLpjDataLoading] = useState<boolean>(true);
    const [notula, setNotula] = useState<Berkas[]>();
    const [notulaLoading, setNotulaLoading] = useState<boolean>(true);
    useEffect(() => {
        axios.get("/api/lpj").then((response) => {
            setLpjData(response.data);
            setLpjDataLoading(false);
        });
        axios.get("/api/notula").then((response) => {
            setNotula(response.data);
            setNotulaLoading(false);
        });
    }, []);
    return (
        <>
            {" "}
            <div className="mt-10 ">
                <div className="mx-20">
                    <Header preset="h1" className="text-blue-2 text-center">
                        Notula & LPJ
                    </Header>
                    <LpjSection lpjData={lpjData} />
                </div>

                <NotulaSection notulaData={notula} />
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
export default NotulaLPJ;
