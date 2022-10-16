import type { NextPage } from "next";
import { Header, Body } from "@components";

const Home: NextPage = () => {
    return (
        <>
            <Header preset="h4">Hello World!</Header>
            <Body preset="p1">example</Body>
        </>
    );
};

export default Home;
