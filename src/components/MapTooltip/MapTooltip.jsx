import React from 'react'
import ToolTip from 'react-portal-tooltip'

class MapTooltip extends React.Component {
  state = {
    isTooltipActive: false
  }
  showTooltip() {
    this.setState({isTooltipActive: true})
  }
  hideTooltip() {
    this.setState({isTooltipActive: false})
  }

  getQuotesList() {
    const quoteList = [];
    this.props.quoteEdges.forEach(quoteEdge => {
      quoteList.push({
        sector: quoteEdge.node.frontmatter.sector,
        question: quoteEdge.node.frontmatter.question,
        html: quoteEdge.node.html,        
      });
    });
    return quoteList;
  }

  render() {    
    const quoteList = this.getQuotesList();

    return (
      <div className="row">
        {
          quoteList.map(quote =>
            <div className="col" key={quote.sector}>
              <p id={`place-${quote.sector}`} onMouseEnter={::this.showTooltip} onMouseLeave={::this.hideTooltip}>{quote.question}</p>
              <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={`#place-${quote.sector}`} group="first">
                <div dangerouslySetInnerHTML={{ __html: quote.html }} />
              </ToolTip>
            </div>
        )}
      </div>
    )
  }
}

export default MapTooltip