import React from 'react';
import './App.css';
import Input from './component/input';
import Button from './component/button';


export default class App extends React.Component{

  constructor (props){
    super(props);
this.state={
code:'', 
highschool:'',
natije:'',
person:[
  {
    code:'9511131237',
    highschool:'shohada',
    grade:'15'
  },
  {
    code:'962023017',
    highschool:'albrz' ,
    grade:'20'
  },
  {
    code:'971000231',
    highschool:'varamin' ,
    grade:'12'
  }
]
}
this.inputCode=this.inputCode.bind(this);
this.inputHighschool=this.inputHighschool.bind(this);

  }
  inputCode=(event)=>{this.setState({code:event.target.value});}
  inputGrade=(event)=>{this.setState({grade:event.target.value});}
  inputHighschool=(event)=>{this.setState({highschool:event.target.value});}
  insert=()=>{
    if(this.state.code=='' || this.state.highschool=='')
    {
      alert('inputs not valid'); return null;
    }
    for(let i=0;i<this.state.person.length;i++)
    {
      if(this.state.person[i].code==this.state.code)
      {
        alert('code is duplicated.'); return null;
      }
    }
    const x=this.state.person;
    x[x.length]={code:this.state.code,highschool:this.state.highschool,grade:this.state.grade};
    this.setState({person:x});
  }
  remove=(id)=>{
    for(let i=0;i<this.state.person.length;i++)
    {
      if(this.state.person[i].code==id)
      {
        let y =this.state.person;
        y.splice(i,1);
        this.setState({person:y});
      }
    }
  };
   

render(){
return(
<div class="container">
 <div class="col-3">
 <span>code</span> 
 <Input tabe={this.inputCode} type='number' digits="9"/>
 </div>
 <div class="col-3">
 <span>highschool</span> 
  <Input tabe={this.inputHighschool} />
  </div>
   <div class="col-3">
   <span>grade</span> 
 <Input type='number' tabe={this.inputGrade} />
 </div>
<br></br>
  <Button name='submit' insert={this.insert}/>
  <table>
    <thead>
    <tr>
      <th>id</th>
      <th>highschool</th>
      <th>grade</th>
      <th>remove</th>
    </tr>
    </thead>
    <tbody>
    {
      this.state.person.map( (per , i) =>
      <tr key={per.code}>
        <td> {per.code} </td>
        <td> {per.highschool} </td>
        <td> {per.grade} </td>
        <td> <Button name='remove this' id={per.code} insert={this.remove}/> </td>
      </tr>)
    }
 </tbody>
 </table>
 <footer>fateme rafeian</footer>
</div>

);
}
}

