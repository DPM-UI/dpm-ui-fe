import type { NextPage } from "next";
import ArrowRight from "@icons/ic_arrow_right.svg";
import { Header } from "@components/typography";
import Link from "next/link";
const StrukturOrganisasi: NextPage = () => {
    return (
        <div className="mt-10 pb-52 mx-20">
            <Header preset="h1" className="text-green-2 text-center">
                Struktur Organisasi
            </Header>
            {/* <div className="h-[600px] w-full">
                <div
                    style={{ backgroundImage: `url("/assets/images/struktur-organisasi.png")` }}
                    className="bg-cover h-full  bg-center mt-8"
                ></div>
            </div> */}

            <img src="/assets/images/struktur-organisasi.png" className="w-full h-auto" />
            <Link href="/anggota-perwakilan">
                <a>
                    <div className="flex justify-end  mt-8 gap-2 items-center">
                        <Header preset="h4" className="text-blue-1">
                            Anggota Perwakilan
                        </Header>
                        <ArrowRight />
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default StrukturOrganisasi;
