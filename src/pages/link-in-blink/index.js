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
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Link In Blink</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Centered content */}
        <Row className="d-flex justify-content-center align-items-center" style={{height:'50vh'}}>
          <Col className="text-center">
          <p  style={{fontSize:'17px', color:'#4a4a4afa'}}>We are</p>
            <h2>Cooking Our Website.</h2>
            <p style={{fontSize:'17px', color:'#4a4a4afa', marginBottom:'30px'}}>
            We are going to lunch our website Very Soon. <br></br>
            Stay Tune.
            </p>
            <Link to="/">
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
