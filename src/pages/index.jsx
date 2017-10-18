import React from "react";
import Helmet from "react-helmet";
import Parser from 'html-react-parser'
import SEO from "../components/SEO/SEO";
import WaterBackground from "../components/WaterBackground/WaterBackground";
import GoogleMapBackground from "../components/GoogleMapBackground/GoogleMapBackground";
import MapTooltips from "../components/MapTooltips/MapTooltips";
import Slider from "../components/Slider/Slider";
import Youtube from "../components/Youtube/Youtube";
import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm";
import config from "../../gatsby-site-config";
import "./index.scss";

class Index extends React.Component {
  render() {
    const quotesEdges = this.props.data.allMarkdownRemark.edges;
    const indexNode = this.props.data.markdownRemark;
    const index = indexNode.frontmatter;
    return (
      <div>
        <Helmet title={index.title} /> 
        <section className="index-first container-fluid p-0"> 
          <div className="index-jubmo container-fluid p-0">
            <WaterBackground />
            <div className="index-header text-center">
              <h1 className="h1">
                Москва <span className="h1-light">Порты Будущего</span>
                <p className="slogan">Встреть свою реку!</p>
              </h1>              
            </div>
            <div className="index-heading index-heading--jumbo">
              <h2>
                {index.headingOne}
              </h2>
              <p>
                {Parser( index.descriptionOneOne )}
              </p>          
            </div> 
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
            <h2>
              {index.headingTwo}
            </h2>
            <p>
              {index.descriptionTwo}
            </p>          
          </div>
        </section>   
        <section className="index-presentation container-fluid p-0">
          <div className="index-slider-wrapper container-fluid p-0">
            <Slider images={indexNode.html}/>            
          </div>
        <div className="index-heading container">
            <h2>
              {index.headingThree}
            </h2>
            <p>
              {index.descriptionThreeOne}
            </p>  
            <p>
              {index.descriptionThreeTwo}
            </p>           
          </div>
        </section>
        <section className="index-research container-fluid p-0">
          <div className="index-player-wrapper w-100">
            <div className="index-player">
              <Youtube />
            </div>
          </div>
          <div className="index-heading container">
            <h2>
              {index.headingFour}
            </h2>
            <p>
              {index.descriptionFour}
            </p>  
          </div>
        </section>
        <section className="index-next container-fluid">
        <div className="index-heading container">
            <h2>
              {index.headingFive}
            </h2>
            <p>
              {index.descriptionFive}
            </p>  
          </div>
        </section>
        <section className="index-form container-fluid">
        <div className="index-heading container">
            <h2 className="h3">
              {index.headingForm}
            </h2>
            <SubscriptionForm />
          </div>
        </section>
        <section className="index-contact container-fluid">
        <div className="index-heading container">
            <h2 className="h3" id="contact">
              Контакты
            </h2>
            {/*contact*/}
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
        headingThree
        descriptionThreeOne
        descriptionThreeTwo
        headingFour
        descriptionFour
        headingFive
        descriptionFive
        headingForm
        placeholderForm
      }
      html
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
