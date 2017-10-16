import React from 'react'
import ToolTip from 'react-portal-tooltip'

class Tooltip extends React.Component {
  style = {
    style: {
      padding: 'inherite',
      borderRadius: 10,
      boxShadow: '0px 4px 10px rgba(38, 26, 18, .25)'
    },
    arrowStyle: {
      display: 'none'
    }
  }

  state = {
    isTooltipActive: false,
    isQuoteActive: false
  }
  showTooltip() {
    this.setState({isTooltipActive: true})
  }
  showQuote() {
    this.setState({isQuoteActive: true})
  }
  hideTooltip() {
    this.setState({isTooltipActive: false})
    this.setState({isQuoteActive: false})
  }
  render() {
    return (
      <div className={this.props.className} key={this.props.id}>
	      <p id={`sector-${this.props.id}`} onMouseEnter={::this.showTooltip} onClick={::this.showQuote} onMouseLeave={::this.hideTooltip}>&nbsp;</p>
	      <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={`#sector-${this.props.id}`} style={this.style} group="map">
          <div>Участок {this.props.sector}. {this.props.embankment}</div>
        </ToolTip>
        <ToolTip active={this.state.isQuoteActive} position="top" arrow="center" parent={`#sector-${this.props.id}`} style={this.style} group="map">
	        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
	      </ToolTip>
	    </div>
    )
  }
}

export default Tooltip