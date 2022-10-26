import type { NextPage } from "next";
import { Header, Body } from "@components";

const Home: NextPage = () => {
    return (
        <>
            <Header preset="h1">Main Header</Header>
            <Body preset="p1">example</Body>
        </>
    );
};

export default Home;
