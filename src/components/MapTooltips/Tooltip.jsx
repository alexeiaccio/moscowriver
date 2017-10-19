import React from 'react'
import ToolTip from './react-tooltip'

class Tooltip extends React.Component {
  style = {
    style: {
      padding: 'null',
      borderRadius: 10,
      boxShadow: '0px 4px 10px rgba(38, 26, 18, 0.25)',
    },
    arrowStyle: {
      boxShadow: '0px 4px 10px rgba(38, 26, 18, 0.25)',
    }
  }
  render() {
    return (
      <g className={this.props.isquote ? `active ${this.props.className}` : this.props.className} key={this.props.id}>
	      <g id={`sector-${this.props.id}`} 
          onMouseEnter={() => this.props.onMouseEnter()} 
          onMouseLeave={() => this.props.onMouseLeave()} 
          onClick={() => this.props.onClick()}
          dangerouslySetInnerHTML={{ __html: this.props.spot }} 
        />
	      <ToolTip active={this.props.istooltip} position="top" arrow="center" parent={`#sector-${this.props.id}`} style={this.style} group="map">
          <div dangerouslySetInnerHTML={{ __html: this.props.sector }} />
        </ToolTip>
        <ToolTip 
          active={this.props.isquote}
          onMouseLeave={() => this.props.onMouseLeave()}
          position="top" arrow="center" 
          parent={`#sector-${this.props.id}`} 
          style={this.style} 
          group="map"
        >
	        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
	      </ToolTip>
	    </g>
    )
  }
}

export default Tooltip