import React from 'react'
import Tooltip from './Tooltip'

class MapTooltips extends React.Component {
  getQuotesList() {
    const quotesList = [];

    this.props.quotesEdges.forEach(quotesEdge => {
      quotesList.push({
        sector: quotesEdge.node.frontmatter.sector,
        embankment: quotesEdge.node.frontmatter.embankment,
        id: quotesEdge.node.frontmatter.sector*10,
        question: quotesEdge.node.frontmatter.question,
        html: quotesEdge.node.html,        
      });
    });
    return quotesList;
  }

  render() {    
    const quotesList = this.getQuotesList();
    return (
      <div className="row">
        {quotesList.map(quote =>
            <Tooltip className="col-lg-3" {...quote} key={quote.id} />
        )}
      </div>
    )
  }
}

export default MapTooltips
