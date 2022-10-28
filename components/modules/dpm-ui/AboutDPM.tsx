import { Header, Body } from "@components/typography";
export const AboutDPM = () => {
    return (
        <div className="bg-gradient-to-br from-[#2C8EBF] to-green-1 w-full rounded-2xl h-full py-8 ">
            <Header preset="h2" className="text-center text-white">
                DPM UI 2022
            </Header>
            <Header preset="h4" className="mx-36 text-center text-white mt-2">
                Dewan Perwakilan Mahasiswa Universitas Indonesia yang selanjutnya disingkat DPM UI adalah lembaga tinggi
                dalam IKM UI yang memiliki kekuasaan legislatif. Mengusung semangat &quot;Memaknai Keberagaman UI&quot;,
                DPM UI 2022 berusaha memberikan warna bagi seluruh civitas akademik Universitas Indonesia.
            </Header>
        </div>
    );
};
