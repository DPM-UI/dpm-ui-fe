import { PagesHero, PagesTujuanCard, Body, SocialMediaCard, Button, Footer } from "@components";
import { PEMIRA_SOCIAL_MEDIA } from "@constants";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";
const Pemira_UI = ({ user }: { user: User }) => {
    const PEMIRA_UI_IMAGE = ["/assets/images/pemira-ui/pemira_ui_2.png", "/assets/images/pemira-ui/pemira_ui_1.png"];
    return (
        <>
            {" "}
            <div className="mt-10 pb-52 mx-20">
                <PagesHero
                    imageUrls={PEMIRA_UI_IMAGE}
                    page="pemira-ui"
                    header="Pemira IKM UI"
                    subHeader="Pemilihan Raya 
                Ikatan Keluarga Mahasiswa 
                Universitas Indonesia"
                    description="Sarana suksesi lembaga kemahasiswaan yang dilaksanakan dalam lingkungan Universitas Indonesia untuk memilih ketua dan wakil ketua BEM UI secara berpasangan, Anggota MWA UI UM dan Anggota DPM UI yang bersifat perseorangan."
                >
                    <Body preset="p2" className="text-grey">
                        Memilih ketua dan wakil ketua BEM UI secara berpasangan, Anggota MWA UI UM dan Anggota DPM UI
                        yang bersifat perseorangan.
                    </Body>
                </PagesHero>
                <SocialMediaCard
                    socialMedia={PEMIRA_SOCIAL_MEDIA}
                    title="Pemira UI"
                    websiteUrl="https://pemira.ui.ac.id/"
                />
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
export default Pemira_UI;
