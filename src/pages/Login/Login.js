import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Login.module.scss';

export default class Login extends Component {
  state = {
    isFormValid: false,
    formControls: {
      login: {
        value: '',
        type: 'text',
        label: 'Login',
        errorMessage: 'Логин не зарегистрирован',
        valid: false,
        touched: false,
        validation: {
          required: true,
          login: true,
        },
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 8,
        },
      },
    },
  };

  loginHandler = () => {};

  submitHandler = (event) => {
    event.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid 
    }

    if (validation.login) {

    }

    if (validation.minLength) {
      isValid =  value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (e, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = e.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(e) => this.onChangeHandler(e, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <div className={classes.Login}>
        <div>
          <h1>Вход</h1>
          <form onSubmit={this.submitHandler} className={classes.LoginForm}>
            {this.renderInputs()}
            <Button
              type="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
              className={classes.Btn}
            >
              Войти
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
