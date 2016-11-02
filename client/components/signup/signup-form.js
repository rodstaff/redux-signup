import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
// import axios from 'axios';

class SignupForm extends React.Component {

  constructor(props) { 

    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({errors: {}});
  	e.preventDefault();
  	this.props.userSignupRequest(this.state).then(
      () => {})
      .catch(error => {
        console.log("error.message: " + error.message);
        this.setState({errors: error.response.data})
      });
    // this.props.userSignupRequest(this.state).then (
    //   () => {},
    //   ({data}) => this.setState({errors: data})
    // ); 
  	// axios.post('/api/users', {user: this.state});
  	// console.log(this.state);
  }

  render() {
    const {errors} = this.state;
  	const options = map(timezones, (val, key) =>
      <option key={key} value={val}>{key}:  {val}</option>
  	);
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
          {errors.username && <span className="help-block">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="text"
            name="password"
            className="form-control"
          />
        </div>        

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="text"
            name="passwordConfirmation"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Timezones</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            type="text"
            name="timezone"
            className="form-control"
          >
            <option value="" disabled>Choose your timezone</option>   
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;