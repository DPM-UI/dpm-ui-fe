import { Header, Button } from "@components";
import Link from "next/link";
type SocialMediaProps = {
    socialMedia: { logo: JSX.Element; url: string }[];
    title: string;
    websiteUrl: string;
};

export const SocialMediaCard = ({ socialMedia, title, websiteUrl }: SocialMediaProps) => {
    return (
        <div className="absolute right-20 bottom-96">
            <div className="p-6 bg-green-pastel w-[370px] rounded-lg ">
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
            <div className="mt-5 flex justify-end">
                <Link href={websiteUrl}>
                    <a>
                        <Button preset="primary">Visit Website</Button>
                    </a>
                </Link>
            </div>
        </div>
    );
};
