import Card from "react-bootstrap/Card"



function ContactCard() {
    return (
        <>
            <Card className="" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title className="text-success">Contact Me!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-primary">Please reach out to me through any of these means</Card.Subtitle>
                    <Card.Text>
                       I have listed my LinkedIn, my GitHub, my resume, and my email!
                 </Card.Text>
                    <Card.Link href="#">LinkedIn</Card.Link>
                    <Card.Link href="#">GitHub</Card.Link>
                    <Card.Link href="#">Email</Card.Link>
                    <Card.Link href="#">Resume</Card.Link>
                </Card.Body>
            </Card>

        </>
    )
};



export default ContactCard;