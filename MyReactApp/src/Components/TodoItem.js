import React, { Component } from 'react'
import PropTypes from  'prop-types';

export class TodoItem extends Component {

getStyle=()=>{
    
        return{
            backgroundColor : '#808080',
            textDecoration: this.props.todo.completed?'line-through': 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
  
}
markComplete=(e)=>{
    console.log(this.props);
}

    render() {
        const{id,title} = this.props.todo
        return (
            <div style={this.getStyle()}>
             <p>
                 <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}></input> {'   '}
                 {title}
                 <button onClick={this.props.deleteItem.bind(this,id)} style={btnStyle} >X</button>
                 </p>
            </div>
        )
    }
}

const btnStyle={
background:'#ff0000',
color:'#fff',
border :'none',
padding:'5px 9px',
borderRadius : '50%',
cursor : 'pointer',
float: 'Right'


}

//PropTypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}



export default TodoItem
