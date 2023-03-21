import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../images/nav-icon1.png";
import navIcon2 from "../images/nav-icon2.png";
import navIcon3 from "../images/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h1>Joshwa</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           <div className="footer-ico">
           <div  id='jos'><a className="joshwa" href='3'><img className='set' src={navIcon1} alt=""/></a></div>
          <div  id="jos"><a className="joshwa" href='3'><img className='set' src={navIcon2} alt=""/></a></div>
          <div  id='jos'><a className="joshwa" href='3'><img className='set' src={navIcon3} alt=""/></a></div>
          <p>Copyright 2022. All Rights Reserved</p>
           </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}