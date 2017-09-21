import React from 'react'

const Todoform = (props)=>{
    return (
    <form onSubmit={props.addTask}>
<input type="text" 

value={props.currentTask}
onChange={props.clickHandler}
//onClick={()=>{
 //return this.props.deleteTask(props.index)

//}}
/>


<button type="submit">submit</button>

</form>
    )
}
export default Todoform