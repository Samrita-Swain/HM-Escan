import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Tretly = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tretly | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Tretly</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="content" style={{paddingBottom:'20px'}}>
          <div className="first-content" style={{marginBlock:'40px'}}>
            <h3 className="mb-3">The Importance of an Online Platform in Modern Business:</h3>
            <p>Adapting to Changing Times
            In today’s rapidly evolving market, many established companies have failed to keep up with changing technologies and consumer behavior, leading to financial ruin and even bankruptcy. The inability to adapt to the shift towards online business has been a key factor in their decline.</p>
          </div>
          <div className="second-content" style={{marginBlock:'40px'}}>
            <h3 className="mb-3">Benefits of an Online Platform:</h3>
            <p><span>1. Increased Business Reach:</span> An online platform helps businesses seamlessly connect with a larger audience, breaking geographical boundaries and allowing for broader customer acquisition without significant effort.</p>
            <p><span>2. Smooth Operations and Growth:</span> By leveraging online tools and systems, businesses can streamline operations, automate processes, and ensure steady growth. This transformation reduces manual intervention and boosts efficiency.</p>
            <p><span>3. Customer Retention and Satisfaction:</span> Online platforms enhance customer interaction and satisfaction. Once customers engage with an online business, the seamless experience and continuous engagement foster long-term relationships and loyalty.</p>
            <p><span>4. Adapting to Market Trends:</span> The move to online business ensures that companies can keep pace with modern trends, such as the rise of electric vehicles and other technological advancements. Companies that fail to adopt these changes risk being left behind.</p>
          </div>
          <div className="third-content" style={{marginBlock:'40px'}}>
            <h3 className="mb-3">Scaling Business Success:</h3>
            <p>The ability to scale a business effectively relies on embracing online platforms. Such platforms boost visibility, promote business ethics, and establish authenticity. When customers see a business’s credibility online, it propels the company to new heights.</p>
          </div>
          <div className="fourth-content">
            <h3 className="mb-3">Conclusion:</h3>
            <p>In the current business landscape, moving to an online platform is not just beneficial but essential for growth and survival. Companies must adapt to online strategies to thrive in today’s challenging world. The benefits, from customer acquisition to enhanced reputation, underscore why going online is key to business success.</p>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
