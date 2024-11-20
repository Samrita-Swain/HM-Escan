import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataproducts, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Products</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
        <Row>
  {dataproducts.map((data, i) => (
    <Col key={i} lg={6} md={6} sm={12} className="mb-4">
      <div className="po_item">
        <img src={data.img} alt={data.description} className="img-fluid" />
        <div className="content">
          <p>{data.description}</p>
          <Link to={data.link}>view project</Link>
        </div>
      </div>
    </Col>
  ))}
</Row>

          </div>    

                  </Container>
                </HelmetProvider>
              );
            };
