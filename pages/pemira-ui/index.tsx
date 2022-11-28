import type { NextPage } from "next";
import { PagesHero, PagesTujuanCard, Body, SocialMediaCard } from "@components";
import { OKK_SOCIAL_MEDIA } from "@constants";
const Pemira_UI: NextPage = () => {
    const OKKUI_Image = [
        "/assets/images/okk-ui/okk-ui-1.jpg",
        "/assets/images/okk-ui/okk-ui-1.jpg",
        "/assets/images/okk-ui/okk-ui-1.jpg",
    ];
    return (
        <div className="mt-10 pb-52 mx-20">
            <PagesHero
                imageUrls={OKKUI_Image}
                page="pemira-ui"
                header="Pemira IKM UI"
                subHeader="Pemilihan Raya 
                Ikatan Keluarga Mahasiswa 
                Universitas Indonesia"
                description="Sarana suksesi lembaga kemahasiswaan yang dilaksanakan dalam lingkungan Universitas Indonesia untuk memilih ketua dan wakil ketua BEM UI secara berpasangan, Anggota MWA UI UM dan Anggota DPM UI yang bersifat perseorangan."
            >
                <Body preset="p2" className="text-grey">
                    Memilih ketua dan wakil ketua BEM UI secara berpasangan, Anggota MWA UI UM dan Anggota DPM UI yang
                    bersifat perseorangan.
                </Body>
            </PagesHero>
            <SocialMediaCard socialMedia={OKK_SOCIAL_MEDIA} title="Pemira UI" />
        </div>
    );
};

export default Pemira_UI;
