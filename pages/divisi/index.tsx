import { DivisionCard, Footer, Header } from "@components";
import { DIVISI } from "@constants";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";

const Divisi = ({ user }: { user: User }) => {
    return (
        <>
            {" "}
            <div className="pb-24">
                <div className="h-32 bg-gradient-to-r from-[#2C8EBF] to-[#47D6C9]">
                    <Header preset="h1" className="text-white text-center pt-9 pb-4">
                        Divisi DPM UI 2022
                    </Header>
                </div>
                <div className="mt-10 flex flex-col gap-16 mx-32">
                    {DIVISI.map((divisi, index: number) => (
                        <div key={index}>
                            <DivisionCard komisi={divisi} />
                        </div>
                    ))}
                </div>
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
export default Divisi;
