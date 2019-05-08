import React,{Component} from 'react';

export default class Input extends Component{

    render(){
        return(
            <input value={this.props.val} onChange={this.props.tabe} type={this.props.type} maxLength={this.props.digits}></input>
        );
    }



}