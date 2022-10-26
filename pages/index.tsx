import type { NextPage } from "next";
import { Header, Body, Button } from "@components";

const Home: NextPage = () => {
    return (
        <>
            <Header preset="h1">Main Header</Header>
            <Body preset="p1">Hello</Body>
            <Button type="outlined">Hello</Button>
        </>
    );
};

export default Home;
