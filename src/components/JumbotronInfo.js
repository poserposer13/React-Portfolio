import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import { Container } from "react-bootstrap"


function JumbotronInfo() {

    return (
        <Jumbotron fluid className="bg-dark">
            <Container>
                <h1 className="text-success">Sean Kempf</h1>
                <p className="text-primary">
                    Welcome!
    </p>
            </Container>
        </Jumbotron>
    )
}

export default JumbotronInfo;



