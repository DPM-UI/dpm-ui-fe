import type { NextPage } from "next";
import { OKK_SOCIAL_MEDIA } from "@constants";
import { PagesHero, PagesTujuanCard, Body, SocialMediaCard } from "@components";
const OKK_UI: NextPage = () => {
    const OKKUI_Image = [
        "/assets/images/okk-ui/okk-ui-1.jpg",
        "/assets/images/okk-ui/okk-ui-2.jpg",
        "/assets/images/okk-ui/okk-ui-3.jpg",
    ];
    return (
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
                            Memperkenalkan IKM UI sebagai <span className="font-bold">wadah bersama</span> mahasiswa UI
                            serta perangkat-perangkat yang ada di dalamnya
                        </Body>
                    </li>
                    <li>
                        <Body preset="p2" className="text-grey">
                            Memberikan <span className="font-bold">pemahaman</span> kepada anggota IKM UI untuk
                            mengaplikasikan kode etik IKM UI, Undang-Undang Dasar IKM UI, dan aturan-aturan lain yang
                            terdapat dalam IKM UI.
                        </Body>
                    </li>
                </ol>
            </PagesHero>
            <SocialMediaCard socialMedia={OKK_SOCIAL_MEDIA} title="OKK UI" />
        </div>
    );
};

export default OKK_UI;
