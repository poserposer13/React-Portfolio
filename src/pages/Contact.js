import ContactCard from "../components/ContactCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Contact() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <ContactCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Contact