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
