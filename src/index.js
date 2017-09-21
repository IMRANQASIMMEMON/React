import React from 'react';
import ReactDOM from 'react-dom';
import Todoform from './component/todoform.js'
class TodoList extends React.Component{
  
   constructor(){
       super()
      this.updateTask=this.updateTask.bind(this)
       this.addTask=this.addTask.bind(this)  
      this.deleteTask = this.deleteTask.bind(this)
       this.state = {
          task: [{name:"imran"}],
              currentTask:""
    
 }
   }
  addTask(evt){
     evt.preventDefault();
     var task=this.state.task
      var currentTask = this.state.currentTask;
      task.push({name:currentTask})
this.setState({
    task,
       currentTask:""
})
  }
  deleteTask(index){
     let task = this.state.task
     task.splice(index,1)
     this.setState({
         task
     }) 
  }




  updateTask(newValue){
       this.setState({
           currentTask:newValue.target.value
       })
   } 
   
  

   render(){
    return(
        <div>
       <Todoform  
      
       addTask={this.addTask}
       clickHandler={this.updateTask}
       currentTask={this.state.currentTask}
     deleteTask={this.deleteTask}
      
      
       /> 
  <ul>
    {this.state.task.map((task,index)=>{

      return<li> {task.name}{
         <button onClick={()=>{this.deleteTask(index)}}>delete</button>}</li>
    })}
  </ul>
    </div>
    )
}
}
ReactDOM.render(<TodoList/>,document.getElementById("root"))





       
   
   
   
