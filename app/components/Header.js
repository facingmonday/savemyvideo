import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Logo from './Logo';

class Header extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={4}>
                        <Logo />
                    </Col>
                    <Col xs={8}>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;