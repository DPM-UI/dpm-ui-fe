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
            <div className="flex justify-between">
                <div className="w-[600px]">
                    <Header preset="h2" className="text-green-2">
                        {header}
                    </Header>
                    <Header preset="h1" className="text-green-1 mt-2">
                        {subHeader}
                    </Header>
                    <Body preset="p2" className="mt-8 text-grey-dark">
                        {description}
                    </Body>
                    <PagesTujuanCard>{children}</PagesTujuanCard>
                </div>
                <div>
                    <PhotoCarousel imageUrls={imageUrls} page={page} />
                </div>
            </div>
        </div>
    );
};
