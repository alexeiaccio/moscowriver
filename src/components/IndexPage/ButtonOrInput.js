import React from 'react'
import { InputMorph, SubmitButton } from 'Styled'
import 'whatwg-fetch'
import { error } from 'util';

export class ButtonOrInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type: 'button',
      button: true,
      submit: false,
      success: false,
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
    if (!this.state.success) {
      this.setState({
        type: 'email',
        button: false,
        value: this.state.value === this.namedButtons(this.props.name)[0].primary.text[0].text ? '' : this.state.value
      })
      event.target.removeEventListener('mousedown', this.handleMouseDown)
      event.target.removeEventListener('touchstart', this.handleTouchStart)
      event.target.focus()
    }
  }

  handleTouchStart = (event) => {
    event.preventDefault()
    this.handleMouseDown()
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
    if(!this.state.button && this.state.value.length > 6) {
      this.setState({submit: true})
    }
  }

  handlePost = (event) => {
    event.preventDefault()
    if (document.getElementsByName('bot-field')[0].value.length === 0) {
      console.log('An email was submitted: ' + this.state.value)

      fetch(`${process.env.SLS || 'https://r16wz2qmr9.execute-api.us-east-1.amazonaws.com/dev'}/subscribe?email=${this.state.value}`, {mode: 'no-cors'})
        .then(response => console.log('parsed json', response))
        .catch(error => console.log('parsing failed', error))

        this.setState({
          type: 'button',
          submit: false,
          success: true,
          value: 'Вы подписаны!'
        })
      }
  }

  render() {
    return (
      <form
        name='SubscriptionForm'
        onSubmit={this.handlePost}
        style={{position: 'relative'}}
      >
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
          button={this.state.button}
          success={this.state.success}
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