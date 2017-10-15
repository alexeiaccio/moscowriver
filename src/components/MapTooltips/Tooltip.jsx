import React from 'react'
import ToolTip from 'react-portal-tooltip'

class Tooltip extends React.Component {
  state = {
    isTooltipActive: false
  }
  showTooltip() {
    this.setState({isTooltipActive: true})
  }
  hideTooltip() {
    this.setState({isTooltipActive: false})
  }
  render() {
    return (
      <div className={this.props.className} key={this.props.id}>
	      <p id={`sector-${this.props.id}`} onMouseEnter={::this.showTooltip} onMouseLeave={::this.hideTooltip}>{this.props.sector} {this.props.question}</p>
	      <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={`#sector-${this.props.id}`} group="map">
	        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
	      </ToolTip>
	    </div>
    )
  }
}

export default Tooltip