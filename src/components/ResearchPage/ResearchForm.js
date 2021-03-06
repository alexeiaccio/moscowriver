import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import { Lazy } from 'Components'

import ArrowIconWhite from '../../assets/ArrowIconWhite.svg'

const Form = styled.form`
  position: relative;
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
  border: 5px solid ${key('colors.blue')};
  border-radius: 25px;
  transition: all .6s ease-in-out;
  color:${key('colors.text')};
  outline: none !important;
  opacity: ${({success}) => success ? 0 : 1};
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
  border: 5px solid ${key('colors.blue')};
  border-radius: 25px;
  transition: all .6s ease-in-out;
  color: ${key('colors.text')};
  outline: none !important;
  opacity: ${({success}) => success ? 0 : 1};
`

const SubmitButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 5px solid ${key('colors.blue')};
  background-color: ${key('colors.blue')};
  background-image: url(${ArrowIconWhite});
  background-position: 5px center;
  background-repeat: no-repeat;
  outline: none !important;
  cursor: pointer;
  visibility: ${props => props.submit ? 'visible' : 'hidden'};
  transition: all .4s ease-in-out;
  opacity: ${({success}) => success ? 0 : 1};
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

const appear = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - ${key(['space', 5])}px);
  height: ${key(['space', 9])}px;
  padding: ${key(['space', 2])}px ${key(['space', 5])}px;
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  font-weight: ${key('fontWeights.medium')};
  background-color: ${key('colors.bright.green')};
  color: ${key('colors.white')};
  border-radius: 2px;
  animation: ${appear} .8s ease-in-out;
`

export class ResearchForm extends React.Component {
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
      [name]: value,
      success: false
    })

    if( this.state.name.length > 1 &&
        this.state.email.length > 6 &&
        this.state.message.length > 5
    ) {
      this.setState({ submit: true })
    }
  }

  handlePost = (event) => {
    event.preventDefault()
    if (document.getElementsByName('bot-field')[0].value.length === 0) {
      console.log('An email was submitted: ' + this.state.value)

      fetch(`${process.env.SLS || 'https://r16wz2qmr9.execute-api.us-east-1.amazonaws.com/dev'}/feedback?page=about&name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`, {mode: 'no-cors'})
        .then(response => console.log('parsed json', response))
        .catch(error => console.log('parsing failed', error))

        this.setState({ success: true })
      }
  }

  render() {
    return (
      <Fragment >        
        <Lazy height={300}>
          <Form
            name={`About-page-form`}
            onSubmit={this.handlePost}
            style={{position: 'relative'}}
          >
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
              success={this.state.success}
            />
            <Input
              onChange={this.handleChange}
              type='email'
              name='email'
              id='email'
              value={this.state.email}
              placeholder={'Ваш email'}
              required
              minLength={7}
              success={this.state.success}
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
              success={this.state.success}
            />
            <SubmitButton
              type='submit'
              submit={this.state.submit ? true : false}
              success={this.state.success}
            />
          {this.state.success &&
            <Success>Спасибо за ваш отзыв!</Success>
          }
          </Form>
        </Lazy>
      </Fragment>
    )
  }
}

export default ResearchForm