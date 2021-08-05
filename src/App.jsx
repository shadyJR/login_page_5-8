import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Medvertex from './Medvertex.png';
import axios from 'axios'


class App extends Component {

  constructor(){
    super()
    this.state = {
      username:'',
      password:'',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
      
    
  onChange = e => {
    this.setState({ 
      [e.target.id]: e.target.value
    });
  };

    onSubmit = e => {
      e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };



    this.setState({
      username:'',
      password:'',
      errors: {}
    })

    // let login = {
    //   username: e.target.value,
    //   password: e.target.value
    // }
    console.log(userData);
    // axios.post('http://localhost:5000/login', userData )
    //   .then(res => {
    //     console.log(res.data ) })
    //   .catch(err => console.log(err));
    // };  
    axios.post("http://localhost:5000/login",userData).then (res => {
          console.log(res.data ) })
        .catch(err => console.log(err));
      }; 

  render() { 
    const  errors = this.state;
    return (
      <div className="App">
            <div className="container">
              <div className="row">
                <div className=" col-12">
                  <div className="logo">
                      <img className="med" src={Medvertex} alt="Logo" />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className=" col-12">
                    <div className="auth-wrapper">
                      <div className="auth-inner">
                        <div>
                          <form noValidate onSubmit={this.onSubmit}>
                            <h3>Log in to your Account</h3>
                            
                            <div className="form-group">
                                <input id="username" type="email" className="form-control" placeholder="Username" onChange={this.onChange} value={this.state.username} error={errors.username} />
                            </div>
                            <br />
                            
                            <div className="form-group">
                                <input id="password" type="password" className="form-control" placeholder="Password" onChange={this.onChange} value={this.state.password} error={errors.password}/>
                            </div>
                      
                            <div className="form-group">
                                <div>
                                    <div className="having">Having trouble logging in ?</div>                        
                                </div>
                            </div>

                            <br />

                            <div className="form-group">
                                {/* <div className="custom-control custom-checkbox"> */}
                                    <div className="inin">
                                    < input type="checkbox" className="custom-control-input" id="customCheck1" />
                                      <label className="custom-control-label" htmlFor="customCheck1">I agree to the<span> Terms of Use</span></label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                                {/* </div> */}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;

