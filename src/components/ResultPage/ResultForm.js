import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'
import ArrowIconWhite from '../../assets/ArrowIconWhite.svg'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Input = styled.input`
  width: 100%;
  max-width: 40%;
  margin-bottom: ${key(['space', 3])}px;
  padding: ${key(['space', 1])}px ${key(['space', 5])}px;
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  font-weight: ${key('fontWeights.medium')};
  background-color: ${key('colors.white')};
  color: ${key('colors.white')};
  border: 5px solid ${key('colors.pink')};
  border-radius: 25px;
  transition: all .6s ease-in-out;
  color:${key('colors.text')};
  outline: none !important;
`

const Textarea = styled.textarea`
  max-width: 100%;
  flex: 1;
  padding: ${key(['space', 2])}px ${key(['space', 5])}px;
  font-family: ${key('fonts.base')};
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  font-weight: ${key('fontWeights.medium')};
  background-color: ${key('colors.white')};
  color: ${key('colors.white')};
  border: 5px solid ${key('colors.pink')};
  border-radius: 25px;
  transition: all .6s ease-in-out;
  color: ${key('colors.text')};
  outline: none !important;
`

const SubmitButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 5px solid ${key('colors.pink')};
  background-color: ${key('colors.pink')};
  background-image: url(${ArrowIconWhite});
  background-position: 5px center;
  background-repeat: no-repeat;
  outline: none !important;
  cursor: pointer;
  visibility: ${props => props.submit ? 'visible' : 'hidden'};
  transition: all .4s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 15px;
    font-size: ${key(['fontSizes', 5])}px;
    font-weight: ${key('fontWeights.semibold')};
    line-height: 40px;
    color: ${key('colors.white')};
    transition: all .4s ease-in-out .2s;
    opacity: 0;
  }
  &:hover {
    width: 150px;
    background-position: 115px center;
    &::after {
      content: 'Отправить';
      opacity: 1;
    }
  }
`


export class ResultForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      name: '',
      email: '',
      message: '',
    }
  }


  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })

    if( this.state.name.length > 1 &&
        this.state.email.length > 7 &&
        this.state.message.length > 5
    ) {
      this.setState({ submit: true })
    }
  }

  handleSubmit = (event) => {
    console.log('An message was submitted: ' + this.state.message)

    if (this.state.submit) {
      return true
    } else {
      event.preventDefault()
    }
  }

  render() {
    return (
      <Form
        name={`Result-page-form-${this.props.uid}`}
        onSubmit={this.handleSubmit}
        method='post'
        action={this.state.submit ? '/thanks?result' : null}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        style={{position: 'relative'}}>
        <input type='hidden' name='form-name' value={`Result-page-form-${this.props.uid}`} />
        <p hidden>
          <label>
            Don’t fill this out: <input name='bot-field' />
          </label>
        </p>
        <Input
          onChange={this.handleChange}
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          placeholder={'Ваше имя'}
          required
          minLength={2}
        />
        <Input
          onChange={this.handleChange}
          type='email'
          name='email'
          id='email'
          value={this.state.email}
          placeholder={'Ваш email'}
          required
          minLength={8}
        />
        <Textarea
          onChange={this.handleChange}
          name='message'
          id='message'
          value={this.state.message}
          placeholder={'Ваш комментарий'}
          required
          minLength={10}
          rows='3'
        />
        <SubmitButton type='submit' submit={this.state.submit ? true : false} />
      </Form>
    )
  }
}

export default ResultForm