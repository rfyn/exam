import React,{Component} from 'react';

export default class Lable extends Component{
    render(){
        return(
            <input  value={this.props.val} onChange={this.props.tabe}></input>
        );
    }
}