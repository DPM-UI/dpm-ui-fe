import type { NextPage } from "next";
import { Header, BerkasCard } from "@components";
import ProdukHukumIllustration from "@images/produk_hukum_illustration.svg";
const ProdukHukum: NextPage = () => {
    const dumm = [
        { title: "KEPUTUSAN DPM UI", berkasUrl: "" },
        { title: "KEPUTUSAN DPM UI", berkasUrl: "" },
        { title: "KEPUTUSAN DPM UI", berkasUrl: "" },
        { title: "KEPUTUSAN DPM UI", berkasUrl: "" },
        { title: "KEPUTUSAN DPM UI", berkasUrl: "" },
    ];
    return (
        <div className="mt-10 pb-52 mx-20 ">
            <Header preset="h1" className="text-blue-2 text-center">
                Produk Hukum
            </Header>
            <div className="flex justify-center flex-col items-center gap-2 mt-8 relative">
                {dumm.map((d, index: number) => (
                    <BerkasCard title={d.title} berkasUrl={d.berkasUrl} isEven={index % 2 == 0} key={index} />
                ))}
            </div>
            <ProdukHukumIllustration className="absolute left-40 top-40" />
            <ProdukHukumIllustration className="absolute right-40 bottom-80" style={{ transform: `scaleX(-1)` }} />
        </div>
    );
};

export default ProdukHukum;
