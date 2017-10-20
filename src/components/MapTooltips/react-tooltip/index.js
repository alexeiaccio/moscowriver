import React from "react";
import PropTypes from "prop-types";
import ReactDOM, {
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer
} from "react-dom";
import assign from "object-assign";

class Card extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
    arrow: PropTypes.oneOf([null, "center", "top", "right", "bottom", "left"]),
    style: PropTypes.object
  };
  static defaultProps = {
    active: false,
    position: "top",
    arrow: null,
    style: { style: {}, arrowStyle: {} }
  };
  state = {
    hover: false,
    transition: "opacity",
    width: 0,
    height: 0
  };
  margin = 60;
  defaultArrowStyle = {
    color: "#fff"
  };
  getGlobalStyle() {
    if (!this.props.parentEl) {
      return { display: "none" };
    }

    let style = {
      position: "absolute",
      padding: "5px",
      background: "#fff",
      boxShadow: "0 0 8px rgba(0,0,0,.3)",
      borderRadius: "10px",
      transition: `${this.state
        .transition} .3s ease-in-out, visibility .3s ease-in-out`,
      opacity: this.state.hover || this.props.active ? 1 : 0,
      visibility: this.state.hover || this.props.active ? "visible" : "hidden",
      zIndex: 50
    };

    assign(style, this.getStyle(this.props.position, this.props.arrow));

    return this.mergeStyle(style, this.props.style.style);
  }
  getBaseArrowStyle() {
    return {
      position: "absolute",
      content: '""',
      background: "#ffffff",
      borderRadius: "50%",
      height: 25,
      width: 25,
      transition: "all .3s ease-in-out"
    };
  }
  getArrowStyle() {
    let fgStyle = this.getBaseArrowStyle();
    fgStyle.zIndex = 60;

    let arrowStyle = assign(
      this.defaultArrowStyle,
      this.props.style.arrowStyle
    );

    let fgSize = 35;

    let { position, arrow } = this.props;

    if (position === "left" || position === "right") {
      fgStyle.top = "50%";
      fgStyle.marginTop = -12.5;

      if (position === "left") {
        fgStyle.right = -50;
      } else {
        fgStyle.left = -12.5;
      }

      if (arrow === "top") {
        fgStyle.top = this.margin;
      }
      if (arrow === "bottom") {
        fgStyle.top = null;
        fgStyle.bottom = this.margin - 12.5;
      }
    } else {
      fgStyle.left = "50%";
      fgStyle.marginLeft = -12.5;

      if (position === "top") {
        fgStyle.bottom = -50;
      } else {
        fgStyle.top = -50;
      }

      if (arrow === "right") {
        fgStyle.left = null;
        fgStyle.right = this.margin + 1 - fgSize;
        fgStyle.marginLeft = 0;
      }
      if (arrow === "left") {
        fgStyle.left = this.margin + 1 - fgSize;
        fgStyle.marginLeft = 0;
      }
    }

    let { color, ...propsArrowStyle } = this.props.style.arrowStyle;

    return {
      fgStyle: this.mergeStyle(fgStyle, propsArrowStyle)
    };
  }
  mergeStyle(style, theme) {
    if (theme) {
      let {
        position,
        top,
        left,
        right,
        bottom,
        marginLeft,
        marginRight,
        ...validTheme
      } = theme;

      return assign(style, validTheme);
    }

    return style;
  }
  getStyle(position, arrow) {
    let parent = this.props.parentEl;
    let tooltipPosition = parent.getBoundingClientRect();
    let scrollY =
      window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
    let scrollX =
      window.scrollX !== undefined ? window.scrollX : window.pageXOffset;
    let top = scrollY + tooltipPosition.top;
    let left = scrollX + tooltipPosition.left;
    let style = {};

    const stylesFromPosition = {
      left: () => {
        style.top = top + parent.offsetHeight / 2 - this.state.height / 2;
        style.left = left - this.state.width - this.margin;
      },
      right: () => {
        style.top = top + parent.offsetHeight / 2 - this.state.height / 2;
        style.left = left + parent.offsetWidth + this.margin;
      },
      top: () => {
        style.left = left - this.state.width / 2 + parent.getBBox().width / 2;
        style.top = top - this.state.height - this.margin;
      },
      bottom: () => {
        style.left = left - this.state.width / 2 + parent.getBBox().width / 2;
        style.top = top + parent.offsetHeight + this.margin;
      }
    };

    const stylesFromArrow = {
      left: () => {
        style.left = left + parent.offsetWidth / 2 - this.margin;
      },
      right: () => {
        style.left =
          left - this.state.width + parent.offsetWidth / 2 + this.margin;
      },
      top: () => {
        style.top = top + parent.offsetHeight / 2 - this.margin;
      },
      bottom: () => {
        style.top =
          top + parent.offsetHeight / 2 - this.state.height + this.margin;
      }
    };

    executeFunctionIfExist(stylesFromPosition, position);
    executeFunctionIfExist(stylesFromArrow, arrow);

    return style;
  }
  checkWindowPosition(style, arrowStyle) {
    if (this.props.position === "top" || this.props.position === "bottom") {
      if (style.left < 0) {
        let offset = style.left;
        style.left = this.margin;
        arrowStyle.fgStyle.marginLeft += offset;
      } else {
        let rightOffset = style.left + this.state.width - window.innerWidth;
        if (rightOffset > 0) {
          let originalLeft = style.left;
          style.left = window.innerWidth - this.state.width - this.margin;
          arrowStyle.fgStyle.marginLeft += originalLeft - style.left;
        }
      }
    }

    return { style, arrowStyle };
  }
  handleMouseEnter() {
    this.props.active && this.setState({ hover: true });
  }
  handleMouseLeave() {
    this.setState({ hover: false });
  }
  componentDidMount() {
    this.updateSize();
  }
  componentWillReceiveProps() {
    this.setState(
      {
        transition:
          this.state.hover || this.props.active ? "opacity" : "opacity"
      },
      () => {
        this.updateSize();
      }
    );
  }
  updateSize() {
    let self = ReactDOM.findDOMNode(this);
    this.setState({
      width: self.offsetWidth,
      height: self.offsetHeight
    });
  }
  render() {
    let { style, arrowStyle } = this.checkWindowPosition(
      this.getGlobalStyle(),
      this.getArrowStyle()
    );

    return (
      <div
        style={style}
        onMouseEnter={::this.handleMouseEnter}
        onMouseLeave={::this.handleMouseLeave}
      >
        {this.props.arrow ? (
          <div>
            <span style={arrowStyle.fgStyle} />
          </div>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

var portalNodes = {};

export default class ToolTip extends React.Component {
  static propTypes = {
    parent: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    active: PropTypes.bool,
    group: PropTypes.string,
    tooltipTimeout: PropTypes.number
  };
  static defaultProps = {
    active: false,
    group: "main",
    tooltipTimeout: 500
  };
  componentDidMount() {
    if (!this.props.active) {
      return;
    }

    this.renderPortal(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (
      (!portalNodes[this.props.group] && !nextProps.active) ||
      (!this.props.active && !nextProps.active)
    ) {
      return;
    }

    let props = assign({}, nextProps);
    let newProps = assign({}, nextProps);

    if (
      portalNodes[this.props.group] &&
      portalNodes[this.props.group].timeout
    ) {
      clearTimeout(portalNodes[this.props.group].timeout);
    }

    if (this.props.active && !props.active) {
      newProps.active = true;
      portalNodes[this.props.group].timeout = setTimeout(() => {
        props.active = false;
        this.renderPortal(props);
      }, this.props.tooltipTimeout);
    }

    this.renderPortal(newProps);
  }
  componentWillUnmount() {
    if (portalNodes[this.props.group]) {
      ReactDOM.unmountComponentAtNode(portalNodes[this.props.group].node);
      clearTimeout(portalNodes[this.props.group].timeout);
    }
  }
  createPortal() {
    portalNodes[this.props.group] = {
      node: document.createElement("div"),
      timeout: false
    };
    portalNodes[this.props.group].node.className = "ToolTipPortal";
    document.body.appendChild(portalNodes[this.props.group].node);
  }
  renderPortal(props) {
    if (!portalNodes[this.props.group]) {
      this.createPortal();
    }
    let { parent, ...other } = props;
    let parentEl =
      typeof parent === "string"
        ? document.querySelector(parent)
        : parent.props.children;
    renderSubtreeIntoContainer(
      this,
      <Card parentEl={parentEl} {...other} />,
      portalNodes[this.props.group].node
    );
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return null;
  }
}

const executeFunctionIfExist = (object, key) => {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    object[key]();
  }
};
