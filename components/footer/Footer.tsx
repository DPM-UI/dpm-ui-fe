import { Header, Body } from "@components";
import { SOCIAL_MEDIA } from "@constants";
import { User } from "@models";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

type FooterProps = {
    user: User;
};
export const Footer = ({ user }: FooterProps) => {
    const { reload } = useRouter();
    const handleLogout = () => {
        axios.post("/api/auth/logout").then((res) => {
            reload();
        });
    };

    return (
        <div>
            <div className="h-72 bg-white w-full " style={{ zIndex: 99999 }}>
                <div className="flex desktop:flex-row mobile:flex-col justify-between desktop:px-20 py-7 desktop:text-left mobile:text-center">
                    <div className="flex flex-col desktop:gap-6 mobile:gap-2 desktop:w-80 text-blue-2 desktop:mx-0 mobile:mx-5">
                        <Header preset="h4">Alamat</Header>
                        <Body preset="p2">
                            Gedung Pusat Kegiatan Mahasiswa UI (Pusgiwa) Lama Lantai 2 Jl. Prof. Dr. Fuad Hassan,
                            Kukusan, Kota Depok, 16425
                        </Body>
                        <Header preset="h4">Kontak</Header>
                        <Body preset="p2">Email : dpm@ui.ac.id</Body>
                    </div>
                    <div className="flex flex-col gap-6 text-blue-2">
                        <Header preset="h4" className="mobile:hidden desktop:block">
                            Media Sosial
                        </Header>
                        <div className="flex gap-6 desktop:justify-start mobile:justify-center desktop:mt-0 mobile:mt-8">
                            {SOCIAL_MEDIA.map(({ logo, url }, index: number) => (
                                <Link href={url} key={index}>
                                    <a>{logo}</a>
                                </Link>
                            ))}
                        </div>
                        <div>
                            <Header preset="h4" className="text-blue-2 underline underline-offset-2 text-cursor">
                                {!user ? (
                                    <Link href="/login">
                                        <a>Login Admin</a>
                                    </Link>
                                ) : (
                                    <div onClick={handleLogout} className="text-cursor">
                                        Log out
                                    </div>
                                )}
                            </Header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
