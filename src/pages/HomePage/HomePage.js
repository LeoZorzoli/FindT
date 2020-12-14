import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import './HomePage.css'

const HomePage = () => {

    return (
        <Container fluid>
            <Row className="principal-text">
                <Col xl={6}>
                    <p className="text1"><span className="half_background">Find the team for your next project</span></p>
                </Col>
                <Col xl={4} className="principal-text-right">
                    <p className="text2">Teamwork</p>
                    <p className="text3">Manages to come up with better ideas, decisions and solutions.</p>
                    <p className="text2">Collaborate</p>
                    <p className="text3">Learn from the good practices of others and generate innovation in products and processes.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;