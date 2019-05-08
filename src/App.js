import React, {Component} from 'react';
import Button from './components/Button';
import Input from './components/Input.js';
import Form from './components/Form';
import './App.css';


class App extends Component {
   
    constructor (props){
        super(props);
    this.state={
    code:'95111',
    name:'fati', 
    family:'rafiyan',
    form:''
    }
    this.inputCode=this.inputCode.bind(Input);
    this.inputName=this.inputName.bind(Input);
    this.inputFamily=this.inputFamily.bind(Input);
    
}
    inputName=(event)=>{this.setState({name:event.target.value});}
    inputFamily=(event)=>{this.setState({family:event.target.value});}
    inputCode=(event)=>{this.setState({code:event.target.value});}
    form=()=>{this.setState({inserte:this.state.name + '  ' + this.state.family})}


    render() {
        return (
            <div>
          
              code:  <Input tabe={this.inputCode}/>
               name: <Input tabe={this.inputName}/>
               family: <Input tabe={this.inputFamily}/>
               <Button/>
               <Form />

            
</div>
        );
    }
}

export default App;
