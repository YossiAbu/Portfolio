import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import linkdeinIcon from '../assets/img/linkdein-icon.svg';
import facebookIcon from '../assets/img/facebook-icon.svg';
import instagramIcon from '../assets/img/instagram-icon.svg';


export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" className="main-logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/yossi-abu-/"><img src={linkdeinIcon} alt="linkdein"/></a>
                            <a href="https://www.facebook.com/yossi.abuu?mibextid=LQQJ4d"><img src={facebookIcon} alt="facebook"/></a>
                            <a href="https://www.instagram.com/yossi_abu?igsh=MTZ5bzBqd2Njb2psYw%3D%3D&utm_source=qr"><img src={instagramIcon} alt="instagram"/></a>
                        </div>
                        <p>CopyRight © 2024. All Right Reserved</p>
                    </Col> 
                </Row>
            </Container>
        </footer>
    )
}