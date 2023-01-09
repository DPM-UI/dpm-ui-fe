import { Header, Body } from "@components";
import { PhotoCarousel } from "./PhotoCarousel";
import { PagesTujuanCard } from "./PagesTujuanCard";
import { ReactNode } from "react";
type PagesHeroProps = {
    header: string;
    subHeader: string;
    description: string;
    imageUrls: string[];
    page: string;
    children: ReactNode;
};
export const PagesHero = ({ header, subHeader, description, imageUrls, page, children }: PagesHeroProps) => {
    return (
        <div>
            {/* TODO: dibikin module aja biar bisa di reuse di pemira */}
            <div className="flex desktop:flex-row mobile:flex-col justify-between">
                <div className="desktop:w-[600px]">
                    <Header preset="h2" className="text-blue-2 desktop:text-left mobile:text-center">
                        {header}
                    </Header>
                    <Header preset="h1" className="text-green-1 mt-2 desktop:text-left mobile:text-center">
                        {subHeader}
                    </Header>
                    <Body preset="p2" className="mt-8 text-grey-dark desktop:text-left mobile:text-justify">
                        {description}
                    </Body>
                    <div className="desktop:block mobile:hidden">
                        <PagesTujuanCard>{children}</PagesTujuanCard>
                    </div>
                </div>
                <div className="desktop:mt-0 mobile:mt-6">
                    <PhotoCarousel imageUrls={imageUrls} page={page} />
                </div>
                <div className="desktop:hidden mobile:block">
                    <PagesTujuanCard>{children}</PagesTujuanCard>
                </div>
            </div>
        </div>
    );
};
