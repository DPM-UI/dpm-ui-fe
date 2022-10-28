import type { NextPage } from "next";
import { Header, Body, Button } from "@components";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-[#2C8EBF] to-[#38BFAF] relative">
            <div
                style={{ backgroundImage: `url("/assets/images/landing_dpm.jpg")` }}
                className="bg-cover h-full bg-center"
            ></div>
            <div className="h-full absolute w-full top-0 bg-opacity-10" style={{ zIndex: 20 }}>
                <div className="flex flex-col items-center mt-40">
                    <div className="flex flex-col  items-center justify-center text-white">
                        <Header preset="h1">DPM</Header>
                        <Header preset="h1">Universitas Indonesia</Header>
                    </div>
                    <div className="flex justify-center mx-64 mt-8">
                        <Body preset="p2" className="text-white text-center">
                            <span className="font-bold">Dewan Perwakilan Mahasiswa Universitas Indonesia</span> yang
                            selanjutnya disingkat DPM UI adalah lembaga tinggi dalam IKM UI yang memiliki kekuasaan{" "}
                            <span className="font-bold">legislatif</span>. Mengusung semangat{" "}
                            <span className="font-bold">"Memaknai Keberagaman UI"</span>, DPM UI 2022 berusaha
                            memberikan warna bagi seluruh civitas akademik Universitas Indonesia.
                        </Body>
                    </div>
                    <Button type="primary" className="mt-7">
                        More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
