import Container from "react-bootstrap/Container";
import ProjectCard from "../components/ProjectCard"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



function Portfolio() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <ProjectCard />
                    </Col>
                    <Col>
                        <ProjectCard />
                    </Col>
                    <Col>
                        <ProjectCard />
                    </Col>
                    <Col>
                        <ProjectCard />
                    </Col>

                    <Col>
                        <ProjectCard />
                    </Col>

                    <Col>
                        <ProjectCard />
                    </Col>
                </Row >
            </Container >
        </>
    )
}


export default Portfolio;