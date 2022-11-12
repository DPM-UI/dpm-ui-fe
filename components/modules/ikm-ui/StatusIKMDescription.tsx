import { Header, Body } from "@components";
import IKMImage from "@images/ikm_ui_illustration.svg";
export const StatusIKMDescription = () => {
    return (
        <div>
            <Header preset="h1" className="text-green-1">
                Status IKM UI
            </Header>
            <div className="flex mt-4">
                <div className="w-[70%] text-justify">
                    <Header preset="regular" className="text-grey-dark">
                        Informasi tentang Status iKM UI. Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Header>
                    <Header preset="regular" className="text-grey-dark mt-10">
                        Informasi tentang Status iKM UI. Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Header>
                </div>
                <IKMImage />
            </div>
        </div>
    );
};
