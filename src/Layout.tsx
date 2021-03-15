import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from "./Header";
import Links from "./Links";


function Layout({ children }: any) {
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    <Col xs={2} style={{ minWidth: "200px" }}>
                        <Links />
                    </Col>
                    <Col xs={8}>{children}</Col>
                    <Col xs={2}></Col>
                </Row>
            </Container>

        </div>
    )
}

export default Layout
