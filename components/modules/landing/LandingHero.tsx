import { Header, Body, Button } from "@components";
export const LandingHero = () => {
    return (
        <div className="h-full absolute w-full top-0 bg-opacity-10">
            <div className="flex flex-col items-center desktop:mt-40 mobile:mt-16">
                <div className="flex flex-col  items-center justify-center text-white">
                    <Header preset="h1">DPM</Header>
                    <Header preset="h1">Universitas Indonesia</Header>
                </div>
                <div className="flex justify-center mx-64 mt-8">
                    <Body preset="p2" className="text-white text-center">
                        <span className="font-bold">Dewan Perwakilan Mahasiswa Universitas Indonesia</span> yang
                        selanjutnya disingkat DPM UI adalah lembaga tinggi dalam IKM UI yang memiliki kekuasaan{" "}
                        <span className="font-bold">legislatif</span>. Mengusung semangat{" "}
                        <span className="font-bold">&quot;Memaknai Keberagaman UI&quot;</span>, DPM UI 2022 berusaha
                        memberikan warna bagi seluruh civitas akademik Universitas Indonesia.
                    </Body>
                </div>
                <Button preset="primary" className="mt-7">
                    More
                </Button>
            </div>
        </div>
    );
};
