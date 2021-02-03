import React, { Component } from 'react';

class Result extends Component{
    render(){
        return (
            <div className={(this.props.toggleclass === "true") ? "resultt" : "result"}>
                {this.props.result}
            </div>
        )
    }
}

export default Result;
