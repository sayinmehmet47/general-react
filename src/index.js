import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React, { Component } from 'react';
import Clock from './timer'
import Clock2 from "./toggletimer"
import ColorPicker from './tasks';
import PhoneNumber from './phoneNumber'
import QuizNavBar from './QuizNavBar';


const questions = [
  {"Question":"This is the first question","Answer":"This is the first Answer"},
  {"Question":"This is the second question","Answer":"This is the second Answer"},
  {"Question":"This is the third question","Answer":"This is the third Answer"},
  {"Question":"This is the forth question","Answer":"This is the forth Answer"},
  {"Question":"This is the fifth question","Answer":"This is the fifth Answer"},
];
class Car extends React.Component {
  render() {
    return (
      <div>
        <h2>I am a {this.props.brand.model}!</h2>

        <h1>I am the second {this.props.name}</h1>
      </div>
    );
  }
}

class Football extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "green",backgroundColor:"" };

    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handleTrigger=this.handleTrigger.bind(this)
  }

  myChangeHandler = (e) => {
    this.setState({ username: e.target.value });
    
  };


  handleTrigger=(color)=>{
    this.setState({ color: color, backgroundColor:"green"});

    console.log(color)

  }

  render() {
    let yazi = <h1>Hello!{this.state.username}</h1>;
    let bilgiler = { name: 'Ford', model: 'Mustang' };
    let general={name:"Mehmet",mail:"sayinmehmet47"}
    

    return (
      <div>
        {yazi}
        <form className="w-50">
          <div className="form-group" id="parent">
            <input
              type="text"
              onChange={this.myChangeHandler}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example label"
            />
          </div>
          <h1  style={{ color: this.state.color,backgroundColor:this.state.backgroundColor }} >Deneme</h1>
        </form>
        <Car brand={bilgiler} />
        <App gen={general} onTrigger={this.handleTrigger}/>
        <Clock/>
        <Clock2/>
        <ColorPicker/>
        <br/>
        <PhoneNumber/>
        <br/>
        <QuizNavBar questions={questions}/>
      </div>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
