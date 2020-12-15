import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import './HomePage.scss'

import collaborate from '../../assets/collaborate.png'
import find from '../../assets/find.png'
import post from '../../assets/post.png'
import profile from '../../assets/profile.png'

const HomePage = () => {

    return (
        <Container fluid className="principal-section">
            <Row className="principal-text">
                <Col xl={7}>
                    <p className="text1"><span className="half_background">Find the team for your next project</span></p>
                </Col>
                <Col xl={4} className="principal-text-right">
                    <p className="text2">Teamwork</p>
                    <p className="text3">Manages to come up with better ideas, decisions and solutions.</p>
                    <p className="text2">Collaborate</p>
                    <p className="text3">Learn from the good practices of others and generate innovation in products and processes.</p>
                </Col>
            </Row>
            <Row>
                <Container fluid className="projects-section">
                    <Container className="blocks-projects">
                        <Row>
                            <Col xl={4} xs={12} className="line-right">
                                <p className="title-projects-section">Small Projects</p>
                                <p>Find specialized experts and agencies for large projects.</p>
                            </Col>
                            <Col xl={4} xs={12}>
                                <p className="title-projects-section">Large Projects</p>
                                <p>Find specialized experts and agencies for large projects.</p>
                            </Col>
                            <Col xl={4} xs={12} className="line-left">
                                <p className="title-projects-section">Company projects</p>
                                <p>Find specialized experts and agencies for large projects.</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Row>
            <Row>
                <Container className="how-work-section">
                        <p className="how-work-title">How it work</p>
                        <Row>
                            <Col xl={3} className="how-work-part">
                                <Image className="image-how-work" fluid src={profile} />
                                <p className="subtitle-how-work">Small Projects</p>
                                <span className="line-blue"></span>
                                <p>Find specialized experts and agencies for large projects.</p>
                            </Col>
                            <Col xl={3} className="how-work-part">
                                <Image className="image-how-work" fluid src={post} />
                                <p className="subtitle-how-work">Large Projects</p>
                                <span className="line-blue"></span>
                                <p>Find specialized experts and agencies for large projects.</p>
                            </Col>
                            <Col xl={3} className="how-work-part">
                                <Image className="image-how-work" fluid src={find} />
                                <p className="subtitle-how-work">Company projects</p>
                                <span className="line-blue"> </span>
                                <p>Find specialized experts and agencies for large projects.</p>
                            </Col>
                            <Col xl={3} className="how-work-part">
                                <Image className="image-how-work" fluid src={collaborate} />                                
                                <p className="subtitle-how-work">Company projects</p>
                                <span className="line-blue"> </span>
                                <p>Find specialized experts and agencies for large projects.</p>
                            </Col>
                        </Row>
                </Container>
            </Row>
            <Row>
                <Container fluid className="footer-section">
                    <Container className="info-footer">
                        <p className="footer-contact">Would you like to collaborate with us? Contact us</p>
                        <Row className="footer-links">
                            <Col xl={3} className="how-work-part">
                                <p>Company</p>
                            </Col>
                            <Col xl={3} className="how-work-part">
                                <p>Terms of Service</p>
                            </Col>
                            <Col xl={3} className="how-work-part">
                                <p>Privacy Policy</p>
                            </Col>
                            <Col xl={3} className="how-work-part">
                                <p>Accessibility</p>
                            </Col>
                        </Row>
                        <p className="company-footer">© 2020 FindT</p>
                    </Container>
                </Container>
            </Row>
            <button className="help-button">Help?</button>
        </Container>
    )
}

export default HomePage;