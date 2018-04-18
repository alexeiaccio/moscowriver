import React from 'react'
import { InputMorph, SubmitButton } from 'Styled'


export class ButtonOrInput extends React.Component {

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

  namedButtons = (name) => this.state.buttons.filter(item => item.primary.buttonname === name)

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
  }

  handleSubmit = (event) => {
    console.log('An email was submitted: ' + this.state.value)

    if (this.state.submit) {
      return true
    } else {
      event.preventDefault()
    }
  }

  render() {
    return (
      <form
        name='SubscriptionForm'
        onSubmit={this.handleSubmit}
        method='post'
        action={this.state.submit ? '/thanks/' : null}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        style={{position: 'relative'}}>
        <input type="hidden" name="form-name" value="SubscriptionForm" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <InputMorph
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
          onChange={this.handleChange}
          type={this.state.type}
          name='email'
          id='email'
          button={this.state.button ? true : false}
          value={this.state.value}
          placeholder={this.state.button ? '' : 'Напиши свой email'}
          required
          minLength={8}
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
          buttonname
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