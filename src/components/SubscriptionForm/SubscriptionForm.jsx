import React from 'react'
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import './SubscriptionForm.scss'

class SubscriptionForm extends React.Component {
  form: FormWithConstraints;

  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
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

    this.form.validateFields();

    this.setState({submitButtonDisabled: !this.form.isValid()});

    if (this.form.isValid()) {
      return true
    } else {
      e.preventDefault();
    }
  }

  render() {
    return (
      <FormWithConstraints className="form-inline custom-form w-100" 
        ref={(formWithConstraints: any) => this.form = formWithConstraints} 
        name="SubscriptionForm"
        method="post"
        action={this.state.submitButtonDisabled ? null : "/thanks/"}
        data-netlify="true"
        data-netlify-honeypot="bot-field" 
        onSubmit={this.handleSubmit} 
        noValidate>
        <div className="form-group w-100 d-flex justify-content-between">
          <input type="hidden" name="form-name" value="SubscriptionForm" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <input className={this.state.submitButtonDisabled ? "form-control is-invalid" : "form-control"} type="email" name="email" id="email" 
              placeholder="Напиши адрес своей почты"
              value={this.state.email} onChange={this.handleChange}
              required minLength={3} />  
          <button className={this.state.submitButtonDisabled ? "btn btn-round btn-primary disabled" : "btn btn-round btn-primary"}  disabled={this.state.submitButtonDisabled}>Отправить</button>
          <div className="invalid-feedback">
              <FieldFeedbacks for="email">          
              <FieldFeedback when={value => value.length === 0}></FieldFeedback>   
                <FieldFeedback when="*" />            
              </FieldFeedbacks>
          </div>
        </div>
      </FormWithConstraints>
    )
  }
}

export default SubscriptionForm