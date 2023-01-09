import { Header, Button } from "@components";
import Link from "next/link";
type SocialMediaProps = {
    socialMedia: { logo: JSX.Element; url: string }[];
    title: string;
    websiteUrl: string;
};

export const SocialMediaCard = ({ socialMedia, title, websiteUrl }: SocialMediaProps) => {
    return (
        <div className="desktop:absolute  desktop:right-20 desktop:bottom-96 desktop:mt-0 mobile:mt-9">
            <div className="mobile:flex justify-center">
                <div className="desktop:p-6  mobile:py-3 mobile:px-10 bg-green-pastel desktop:w-[370px] rounded-lg ">
                    <div>
                        <Header preset="h3" className="text-blue-2">
                            Media Sosial {title}
                        </Header>
                    </div>
                    <div className="flex gap-3 items-center desktop:justify-start mobile:justify-center desktop:mt-0 mobile:mt-2">
                        {socialMedia.map((sos: any, index: number) => (
                            <Link href={sos.url} key={index}>
                                <a>{sos.logo}</a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-5 flex desktop:justify-end mobile:justify-center">
                <Link href={websiteUrl}>
                    <a>
                        <Button preset="primary">Visit Website</Button>
                    </a>
                </Link>
            </div>
        </div>
    );
};
