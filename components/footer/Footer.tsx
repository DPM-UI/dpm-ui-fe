import { Header, Body } from "@components";
import { SOCIAL_MEDIA } from "@constants";
import Link from "next/link";

export const Footer = () => {
    return (
        <div>
            <div className="h-72 bg-light-cyan w-full">
                <div className="flex justify-between px-20 py-7">
                    <div className="flex flex-col gap-6 w-80 text-blue-2">
                        <Header preset="h4">Alamat</Header>
                        <Body preset="p2">
                            Gedung Pusat Kegiatan Mahasiswa UI (Pusgiwa) Lama Lantai 2 Jl. Prof. Dr. Fuad Hassan,
                            Kukusan, Kota Depok, 16425
                        </Body>
                        <Header preset="h4">Kontak</Header>
                        <Body preset="p2">Email : dpm@ui.ac.id</Body>
                    </div>
                    <div className="flex flex-col gap-6 text-blue-2">
                        <Header preset="h4">Media Sosial</Header>
                        <div className="flex gap-6">
                            {SOCIAL_MEDIA.map(({ logo, url }, index: number) => (
                                <Link href={url} key={index}>
                                    <a>{logo}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
