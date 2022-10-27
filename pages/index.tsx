import type { NextPage } from "next";
import { Header, Body, Button } from "@components";

const Home: NextPage = () => {
    return (
        <div className="h-full">
            <Header preset="h1">Main Header</Header>
            <Body preset="p1">Hello</Body>
            <Header preset="h1">Main Header</Header>
            <Body preset="p1">Hello</Body> <Header preset="h1">Main Header</Header>
            <Body preset="p1">Hello</Body>
            <Button type="outlined">Hello</Button>
            <Header preset="h1">Main Header</Header>
            <Body preset="p1">Hello</Body>
            <Button type="outlined">Hello</Button>
        </div>
    );
};

export default Home;
