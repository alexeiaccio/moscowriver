import React from "react";
import Helmet from "react-helmet";
import Parser from 'html-react-parser'
import SEO from "../components/SEO/SEO";
import SiteNavi from '../components/SiteNavi'
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
                {Parser(index.descriptionOneOne)}
              </p>          
            </div> 
          </div> 
        </section>         
        <SiteNavi title={config.siteTitle} {...this.props} />
        <section className="index-first container-fluid p-0">
          <div className="index-heading index-heading--one-two container">
            <p id="map">
              {Parser(index.descriptionOneTwo)}
            </p>          
          </div>       
        </section>    
        <section className="index-quotes container-fluid p-0">          
          <div className="map-wrapper w-100">        
            <GoogleMapBackground />
            <div className='container mt-5'>          
              <MapTooltips quotesEdges={quotesEdges} />
            </div>
          </div>
          <div className="index-heading index-heading--two">
            <h2>
              {index.headingTwo}
            </h2>
            <p>
              {Parser(index.descriptionTwo)}
            </p>          
          </div>
        </section>   
        <section id="conception" className="index-presentation container-fluid p-0">
          <div className="index-slider-wrapper container-fluid p-0">
            <Slider images={indexNode.html}/>            
          </div>
        <div className="index-heading index-heading--three">
            <h2>
              {index.headingThree}
            </h2>
            <p>
              {Parser(index.descriptionThreeOne)}
            </p>  
            <p>
              <a href="https://drive.google.com/file/d/0B7eGpN44KV1nYllBTmVBSXVDVlk/view?usp=sharing" target="_blank" className="btn btn-round btn-primary my-3">Открыть презентацию</a>
            </p>
            <p>
              {Parser(index.descriptionThreeTwo)}
            </p>           
          </div>
        </section>
        <section id="research" className="index-research container-fluid p-0">
          <div className="index-player-wrapper w-100">
            <div className="index-player">
              <Youtube youTubeID={index.youTubeID}/>
            </div>
          </div>
          <div className="index-heading index-heading--four">
            <h2>
              {index.headingFour}
            </h2>
            <p>
              {Parser(index.descriptionFour)}
            </p>  
          </div>
        </section>
        <section className="index-next container-fluid">
        <div className="index-heading index-heading--five">
            <h2>
              {index.headingFive}
            </h2>
            <p>
              {Parser(index.descriptionFive)}
            </p>  
          </div>
        </section>
        <section className="index-form container-fluid">
        <div className="index-heading">
            <h2 className="h3">
              {index.headingForm}
            </h2>
            <SubscriptionForm />
          </div>
        </section>
        <section className="index-contact container-fluid">
          <div className="index-heading container">
            <div className="row align-items-baseline">
              <h2 className="h3 col-3" id="contact">
                Контакты
              </h2>
              <div className="col contact-link">Email: <a href="mailto:moscowriver@orchestra-design.com">moscowriver@orchestra-design.com</a>
              </div>
              <div className="d-flex ml-auto">
                <a className="link-social link-social--f" href="https://www.facebook.com/orchestradesignstudio" target="_blank">&nbsp;</a>
                <a className="link-social link-social--vk" href="https://vk.com/moscowriver2017" target="_blank">&nbsp;</a>
              </div>
            </div>
            <div className="row align-items-end mt-5">
              <div className="d-flex logo logo--meganom" />
              <div className="d-flex ml-auto logo logo--orchestra" />
            </div>
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
        youTubeID
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
            spot
          }
          html
        }
      }    
    }
  }  
`;
