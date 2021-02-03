import React, { Component } from 'react';
import Calbutton from './Calbutton.js';
import Result from './Result.js';
import Switchmode from './Switchmode.js';
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.toggle = React.createRef();
    this.state = {
      prevInput: "",
      currInput: "",
      result: "0",
      operator: "",
      mtoggle:""
    }
  }
  buttonpressed  = buttonName => {
    if(buttonName === "="){
      this.calculate();
    }
    else if(buttonName === "C"){
      this.reset();
    }
    else if(buttonName === "sq"){
      this.setState({
        result:this.state.result * this.state.result
      })
    }
    else if(buttonName === "sqrt"){
      this.setState({
        result:Math.sqrt(this.state.result)
      })
    }
    else if(buttonName === "flip"){
      this.setState({
        result: `${this.state.result > 0 
                ? -Math.abs(this.state.result) 
                : Math.abs(this.state.result)}`
      })
    }
    else{
      if(buttonName >= 0 && buttonName <= 9)
      {
        this.setState({
          prevInput: `${this.state.operator === "" 
                      ? this.state.prevInput + buttonName 
                      : this.state.prevInput}`,
          result: `${this.state.operator !== "" 
                    ? this.state.currInput + buttonName 
                    : this.state.prevInput + buttonName}`,
          currInput: `${this.state.operator !== "" 
                      ? this.state.currInput + buttonName 
                      : this.state.currInput}`
        });
      }
      else if(
        buttonName === "+" || buttonName === "-" || buttonName === "*" || buttonName === "/")
        {
          this.setState({ 
            result:`${((this.state.prevInput !== "") && (this.state.operator !== "") && 
                    (this.state.currInput !== "")) 
                    ? eval(`${this.state.prevInput}${this.state.operator}${this.state.currInput}`)
                    : this.state.prevInput}`,
            operator:buttonName,
          },
            () => 
            {
              this.setState({
                prevInput:this.state.result,
                currInput: ""
              });
            }
          );
        }
    }
  }
  calculate = () =>{
    try{
      this.setState({
      result: eval(`${this.state.prevInput}${this.state.operator}${this.state.currInput}`)
      });
    }
    catch{
      this.setState({
        result: "error"
      });
    }
  }
  reset = () => {
    this.setState({
      result: "0"
    });
  }
  clickHandler = () => {
    this.setState({
      mtoggle: `${this.toggle.current.state.Lightmode}`
    });
  }
  render(){
    return (
      <div className={(this.state.mtoggle === "true") ? "Appt" : "App"}> 
        <div className="calc-body"> 
          <Result result={this.state.result} toggleclass={this.state.mtoggle}/>
          <Calbutton buttonPressed = {this.buttonpressed} toggleclass={this.state.mtoggle}/>
        </div>
        <div onClick={this.clickHandler}>
          <Switchmode ref={this.toggle}/> 
        </div>  
      </div>
    )
  }
}

export default App;
