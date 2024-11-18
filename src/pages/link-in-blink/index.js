import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { Link } from "react-router-dom";

export const LinkInBlink = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Link In Blink | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Link In Blink</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Centered content */}
        <Row className="background d-flex justify-content-center align-items-center">
          <div className="black-cover"></div>
          <Col className="text-center">
          <p  style={{fontSize:'17px', color:'#ffffff85'}}>We are</p>
            <h2>Cooking Our Website.</h2>
            <p style={{fontSize:'17px', color:'#ffffff85', marginBottom:'30px'}}>
            We are going to lunch our website Very Soon. <br></br>
            Stay Tune.
            </p>
            <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Notify Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
