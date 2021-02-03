import React, { Component } from 'react';
class Calbutton extends Component{
    constructor(props){
        super(props)
        this.state = {
            scmode: false
        }
    }    
    Toggle = () => {
        this.setState(prevState => ({
            scmode: !prevState.scmode
        }))
    }
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    }
    render(){
        return (
            <>
                <div className={(this.props.toggleclass === "true") ? "buttonst" : "buttons"}>
                    <button name="1" onClick={this.buttonPressed}>1</button>
                    <button name="2" onClick={this.buttonPressed}>2</button>
                    <button name="3" onClick={this.buttonPressed}>3</button>
                    <button name="+" onClick={this.buttonPressed}>+</button>
                    <button name="4" onClick={this.buttonPressed}>4</button>
                    <button name="5" onClick={this.buttonPressed}>5</button>
                    <button name="6" onClick={this.buttonPressed}>6</button>
                    <button name="-" onClick={this.buttonPressed}>-</button>
                    <button name="7" onClick={this.buttonPressed}>7</button>
                    <button name="8" onClick={this.buttonPressed}>8</button>
                    <button name="9" onClick={this.buttonPressed}>9</button> 
                    <button name="*" onClick={this.buttonPressed}>*</button>
                    <button name="C" onClick={this.buttonPressed}>C</button>
                    <button name="0" onClick={this.buttonPressed}>0</button>
                    <button name="=" onClick={this.buttonPressed}>=</button>
                    <button name="/" onClick={this.buttonPressed}>/</button>
                    {this.state.scmode ? 
                        (<>
                            <button name="sqrt" onClick={this.buttonPressed} className="scbutton">
                                square root
                            </button> 
                            <button name="sq" onClick={this.buttonPressed} className="scbutton">
                                square
                            </button>
                            <button name="flip" onClick={this.buttonPressed} className="scbutton">
                                flip
                            </button>
                        </>) :
                        ("")
                    }
                </div>
                <div>
                    <button onClick={this.Toggle} className={this.state.scmode ? 
                        "acscientific" :"scientific"}>
                            Scientific Mode
                    </button>
                </div>
            </>
        )
    }
}

export default Calbutton;
