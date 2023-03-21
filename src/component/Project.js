import { Container , Row , Col } from "react-bootstrap"

export const Project = () =>{
    return(
        <section id="project">
            <Container>
            <Row className="my-6">
                <Col xs={12} md={6} xl={6}>
                  <div className="pro-info">
                  <h1>My Latest Work</h1>
                    <p>These are my latest works.. they are UI designs that i have made..<br/>
                     I am Passionate developers  always curious and have unending enthusiasm  <br/>
                     for solving problems. I understand that there is no better way to learn than working on challenges.</p>
                  </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                <div className="card">
                  <div class="detail">
                   <h2>Admin Panel</h2>
                  </div>
     </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs={12} md={6} xl={6}>
                <div className="card2">
                  <div class="detail">
                   <h2>Flavours(masala)</h2>
                  </div>
                  </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                  <div className="card3">
                  <div class="detail">
                   <h2>E-Commerce Store</h2>
                  </div> 
                  </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}