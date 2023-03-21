import { Container , Row , Col } from "react-bootstrap"
import conImg from "../images/contact-img.png"

export const Contact = ()=>{
    return(
       <section className="co-fm">
         <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <img className="contact-img" src={conImg} alt="Contact Img"/>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                    <div class="move">
            <form >
                <h1>Get In Touch</h1>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" /> <br/>
                <input id="ga" type="email" required placeholder="Email Address" />
                <input id="ga" type="number" required placeholder="Phone No." /> <br />
                <input id="gana" type="text" placeholder="Type Your message" />
                <button class="send">Send</button>

            </form>
        </div>
                    </Col>
                </Row>
            </Container>
       </section>
    )
}