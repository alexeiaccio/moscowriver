import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import WaterBackground from "../components/WaterBackground/WaterBackground";
import GoogleMapBackground from "../components/GoogleMapBackground/GoogleMapBackground";
import MapTooltips from "../components/MapTooltips/MapTooltips";
import Slider from "../components/Slider/Slider";
import config from "../../gatsby-site-config";
import "./index.scss";

class Index extends React.Component {
  render() {
    const quotesEdges = this.props.data.allMarkdownRemark.edges;
    const indexNode = this.props.data.markdownRemark;
    const index = indexNode.frontmatter;
    return (
      <div>
        <Helmet title={config.siteTitle} /> 
        <section className="index-jumbo container-fluid"> 
          <WaterBackground />
          <div className="index-heading container">
            <h1>
              {index.headingOne}
            </h1>
            <p>
              {index.descriptionOneOne}
            </p>          
          </div> 
          <div className="index-heading container">
            <p>
              {index.descriptionOneTwo}
            </p>          
          </div>
        </section>    
        <section className="index-quotes container-fluid">          
          <div className="map-wrapper w-100">        
            <GoogleMapBackground />
            <div className='container mt-5'>          
              <MapTooltips quotesEdges={quotesEdges} />
            </div>
          </div>
          <div className="index-heading container">
            <h1>
              {index.headingTwo}
            </h1>
            <p>
              {index.descriptionTwo}
            </p>          
          </div>
        </section>   
        <section className="index-presentation container-fluid">
        <Slider />
        <div className="index-heading container">
            <h1>
              {index.headingTwo}
            </h1>
            <p>
              {index.descriptionThreeOne}
            </p>  
            <p>
              {index.descriptionThreeTwo}
            </p>           
          </div>
        </section>
        <section className="index-research container-fluid">
        {/*youtube*/}
        <div className="index-heading container">
            <h1>
              {index.headingFour}
            </h1>
            <p>
              {index.descriptionFour}
            </p>  
          </div>
        </section>
        <section className="index-next container-fluid">
        <div className="index-heading container">
            <h1>
              {index.headingFive}
            </h1>
            <p>
              {index.descriptionFive}
            </p>  
          </div>
        </section>
        <section className="index-form container-fluid">
        <div className="index-heading container">
            <h1>
              {index.headingForm}
            </h1>
          </div>
        </section>
        <section className="index-contact container-fluid">
        <div className="index-heading container">
            <h1>
              Контакты
            </h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const indexQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {type: {eq: "data"}, to: {eq: "mainpage"}}) {
      frontmatter {
        title
        headingOne
        descriptionOneOne
        descriptionOneTwo
        headingTwo
        descriptionTwo
        descriptionThreeOne
        descriptionThreeTwo
        headingFour
        descriptionFour
        headingFive
        descriptionFive
        headingForm
        placholderForm
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "quote"}}}) {
      edges {
        node {
          frontmatter {
            type
            sector
            embankment
            question
            human
          }
          html
        }
      }    
    }
  }  
`;
