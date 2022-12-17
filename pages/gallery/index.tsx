import { DivisionCard, Header, Footer, PhotosCarousel } from "@components";
import nookies from "nookies";
import { GALLERY_DATA } from "@constants";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";
const Komisi = ({ user }: { user: User }) => {
    return (
        <>
            <div className="pb-24 mt-10">
                <Header preset="h2" className="text-blue-2 text-center">
                    Gallery DPM UI
                </Header>
                {GALLERY_DATA.map((g) => (
                    <div className="ml-40">
                        <PhotosCarousel name={g.name} photoUrls={g.photoUrls} />
                    </div>
                ))}
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
export default Komisi;
