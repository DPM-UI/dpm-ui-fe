import { OKK_SOCIAL_MEDIA } from "@constants";
import { PagesHero, Body, SocialMediaCard, Footer } from "@components";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";

const OKK_UI = ({ user }: { user: User }) => {
    const OKKUI_Image = [
        "/assets/images/okk-ui/okk-ui-1.jpg",
        "/assets/images/okk-ui/okk-ui-2.jpg",
        "/assets/images/okk-ui/okk-ui-3.jpg",
    ];
    return (
        <>
            <div className="mt-10 pb-52 mx-20">
                <PagesHero
                    imageUrls={OKKUI_Image}
                    page="okk-ui"
                    header="OKK UI"
                    subHeader="Buku, Pesta, dan Cinta
                #BersamaBereksplorasi"
                    description="OKK UI atau Orientasi Kehidupan Kampus Universitas Indonesia merupakan sebuah kegiatan yang dilakukan setiap tahunnya guna membekali mahasiswa dalam kegiatan kampusnya nanti. Proses pembekalan ini menjadi masa untuk mahasiswa beradaptasi dengan lingkungan barunya."
                >
                    {" "}
                    <ol className="list-decimal mx-6 mt-4">
                        <li>
                            <Body preset="p2" className="text-grey">
                                Memperkenalkan IKM UI sebagai <span className="font-bold">wadah bersama</span> mahasiswa
                                UI serta perangkat-perangkat yang ada di dalamnya
                            </Body>
                        </li>
                        <li>
                            <Body preset="p2" className="text-grey">
                                Memberikan <span className="font-bold">pemahaman</span> kepada anggota IKM UI untuk
                                mengaplikasikan kode etik IKM UI, Undang-Undang Dasar IKM UI, dan aturan-aturan lain
                                yang terdapat dalam IKM UI.
                            </Body>
                        </li>
                    </ol>
                </PagesHero>
                <SocialMediaCard socialMedia={OKK_SOCIAL_MEDIA} title="OKK UI" websiteUrl="https://okk.ui.ac.id/" />
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
export default OKK_UI;
