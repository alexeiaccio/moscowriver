import React from 'react'
import Tooltip from './Tooltip'
import "./MapTooltips.scss"

class MapTooltips extends React.Component {
  getQuotesList() {
    const quotesList = [];

    this.props.quotesEdges.forEach(quotesEdge => {
      quotesList.push({
        sector: `<div class="map-embankment"><span class="text-secondary">Участок ${quotesEdge.node.frontmatter.sector/10}.</span>&nbsp;<span class="text-warning">${quotesEdge.node.frontmatter.embankment}</span></div>`,
        embankment: quotesEdge.node.frontmatter.embankment,
        id: quotesEdge.node.frontmatter.sector,
        html: `<div class="map-top"><span class="text-secondary">Участок ${quotesEdge.node.frontmatter.sector/10}.</span>&nbsp;<span class="text-warning">${quotesEdge.node.frontmatter.embankment}</span></div>${ this.getQuestion(quotesEdge.node.frontmatter.question) }<div class="map-quote">${quotesEdge.node.html}</div>`,        
      });
    });
    return quotesList;
  }

  getQuestion(question) {
     if (question !== '') {
      return `<div class="map-question">&mdash;&nbsp;${question}</div>`
     } 
     return `<div class='d-none'></div>`
  }

  render() {    
    const quotesList = this.getQuotesList();

    return (
      <div className="row map-tooltips">
        {quotesList.map(quote =>
            <Tooltip className={`map-sector map-sector-${quote.id}`} {...quote} key={quote.id} />
        )}    
      </div>
    )
  }
}

export default MapTooltips
