import { Header } from "@components";
import Link from "next/link";
type SocialMediaProps = {
    socialMedia: { logo: JSX.Element; url: string }[];
    title: string;
};

export const SocialMediaCard = ({ socialMedia, title }: SocialMediaProps) => {
    console.log(socialMedia);
    return (
        <div className="p-6 bg-green-pastel w-[370px] rounded-lg absolute right-20 ">
            <div>
                <Header preset="h3" className="text-green-2">
                    Media Sosial {title}
                </Header>
            </div>
            <div className="flex gap-3 items-center">
                {socialMedia.map((sos: any, index: number) => (
                    <Link href={sos.url} key={index}>
                        <a>{sos.logo}</a>
                    </Link>
                ))}
            </div>
        </div>
    );
};
