import React from "react"
import Jumbotron from "../components/JumbotronInfo";
import HomeInfo from "../components/HomeInfo"
import { Container } from "react-bootstrap";


function Home() {
    return (
        <>
        <Container fluid>
        <Jumbotron />
        <HomeInfo />
        </Container>
        </>
    )
};



export default Home;