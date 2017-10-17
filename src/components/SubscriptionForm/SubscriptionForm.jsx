import React from 'react'
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

class SubscriptionForm extends React.Component {
  form: FormWithConstraints;

  constructor(props: Props) {
    super(props);

    this.state = {
      username: '',
      submitButtonDisabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;

    this.form.validateFields(target);

    this.setState({
      [target.name]: target.value,
      submitButtonDisabled: !this.form.isValid()
    });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //e.preventDefault();

    this.form.validateFields();

    this.setState({submitButtonDisabled: !this.form.isValid()});

    if (this.form.isValid()) {
      return true
    }
    return false
  }

  render() {
    return (
      <FormWithConstraints className="form-inline" 
        ref={(formWithConstraints: any) => this.form = formWithConstraints} 
        name="SubscriptionForm"
        method="post"
        action={this.state.submitButtonDisabled ? null : "/thanks/"}
        data-netlify="true"
        data-netlify-honeypot="bot-field" 
        onSubmit={this.handleSubmit} 
        noValidate>
        <div className="form-group">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <label htmlFor="username">Username</label>
          <input className={this.state.submitButtonDisabled ? "form-control is-invalid" : "form-control"} type="email" name="username" id="username" placeholder="Enter email"
                 value={this.state.username} onChange={this.handleChange}
                 required minLength={3} />
          <div className="invalid-feedback">
            <FieldFeedbacks for="username">             
              <FieldFeedback when="tooShort">Too short</FieldFeedback>
              <FieldFeedback when={value => !/\S+@\S+/.test(value)}>Invalid email address.</FieldFeedback>            
            </FieldFeedbacks>
          </div>
        </div>

        <button className={this.state.submitButtonDisabled ? "btn btn-primary disabled" : "btn btn-primary"}  disabled={this.state.submitButtonDisabled}>Отправить</button>
      </FormWithConstraints>
    )
  }
}

export default SubscriptionForm