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
  render() {
    return (
      <div className="container mt-5">
        <p id={`place-${this.props.id}`} onMouseEnter={::this.showTooltip} onMouseLeave={::this.hideTooltip}>{this.props.text}</p>
        <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={`#place-${this.props.id}`} group="first">
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </ToolTip>
      </div>
    )
  }
}

export default MapTooltip