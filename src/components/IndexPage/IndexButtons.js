import React from 'react'
import { InputMorph, SubmitButton } from 'Styled'


export class IndexButtons extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      type: 'button',
      button: true,
      submit: false,
      value: '',
      buttons: this.props.data.body.filter(item => item.slice_type === 'button')
    }
  }

  namedButtons = (name) => this.state.buttons.filter(item => item.primary.name[0].text === name)

  componentDidMount() {
    this.setState({
      value: this.namedButtons(this.props.name)[0].primary.text[0].text
    })
  }
  
  handleMouseDown = (event) => {
    this.setState({
      type: 'email',
      button: false,
      value: this.state.value === this.namedButtons(this.props.name)[0].primary.text[0].text ? '' : this.state.value
    })
    event.target.removeEventListener('mousedown', this.handleMouseDown)
    event.target.focus()
  }

  handleTouchStart = (event) => {
    event.preventDefault()
    this.handleMouseDown()
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
    if(!this.state.button && this.state.value.length > 7) {
      this.setState({submit: true})      
    }
    console.log(this.state.submit)
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    
    
    return (
      <form onSubmit={this.handleSubmit} style={{position: 'relative'}}>
        <InputMorph
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
          onChange={this.handleChange}
          type={this.state.type}
          button={this.state.button ? true : false}
          value={this.state.value}
          placeholder={this.state.button ? '' : 'Напиши свой email'}
        />
        <SubmitButton type='submit' submit={this.state.submit ? true : false} />
      </form>
    )
  }
}

export const query = graphql`
  fragment IndexButtonsFragment on PrismicDocument {
    data {
      body {
        slice_type
        primary {
          name {
            text
          }
          image {
            url
          }
          icon {
            url
          }
          linktext {
            text
          }
        }
      }
    }
  }
`