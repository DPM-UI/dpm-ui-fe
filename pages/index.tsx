import type { NextPage, NextPageContext } from "next";
import nookies from "nookies";
import axios from "axios";
import { LandingHero, Footer } from "@components";
import { User } from "@models";

const Home = ({ user }: { user: User }) => {
    return (
        <>
            <div className="h-screen bg-gradient-to-br from-[#2C8EBF] to-[#38BFAF] relative">
                <div
                    style={{ backgroundImage: `url("/assets/images/landing_dpm.jpg")` }}
                    className="bg-cover h-full bg-center"
                ></div>

                <LandingHero />
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
export default Home;
