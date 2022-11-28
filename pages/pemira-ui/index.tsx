import type { NextPage } from "next";
import { PagesHero, PagesTujuanCard, Body, SocialMediaCard, Button } from "@components";
import { PEMIRA_SOCIAL_MEDIA } from "@constants";
const Pemira_UI: NextPage = () => {
    const PEMIRA_UI_IMAGE = ["/assets/images/pemira-ui/pemira_ui_2.png", "/assets/images/pemira-ui/pemira_ui_1.png"];
    return (
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
                    Memilih ketua dan wakil ketua BEM UI secara berpasangan, Anggota MWA UI UM dan Anggota DPM UI yang
                    bersifat perseorangan.
                </Body>
            </PagesHero>
            <SocialMediaCard
                socialMedia={PEMIRA_SOCIAL_MEDIA}
                title="Pemira UI"
                websiteUrl="https://pemira.ui.ac.id/"
            />
        </div>
    );
};

export default Pemira_UI;
