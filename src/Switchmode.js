import React, { Component } from 'react';

class Switchmode extends Component{
    constructor(props){
        super(props)
        this.state = {
            Lightmode: true
        }
    }
    
    modeToggle = () => {
        this.setState(prevState => ({
            Lightmode: !prevState.Lightmode
        }))
    }
    render(){
        return(
            <div className="modes">
                <button onClick={this.modeToggle} className={this.state.Lightmode ? 
                "activeMode" : ""}>
                    Light Mode
                </button>
                <button onClick={this.modeToggle} className={this.state.Lightmode ? 
                "" : "activeMode"}>
                    Dark Mode
                </button>
            </div>
        )
    }
}
export default Switchmode;