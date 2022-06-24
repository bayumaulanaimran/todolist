import React from "react";
import TodoItem from "./todoItem";

class TodoInput extends React.Component{

    callbackFunction = (itemData,perintah,index) => {
        let prevList = this.state.todoList;
        if(perintah === 'ubah'){
            prevList[index] = {index:index,title:itemData,isCompleted:false,isDeleted:false};
        // }else if(perintah === 'hapus'){
        //     for(let i=0;i<prevList.length;i++){
        //         if(prevList[i].title===itemData||prevList[i].index===index){
        //             prevList.splice(i,1);
        //             prevList[i].index = {i};
        //         }
        //     }
        //     this.setState({index:prevList.length});
        }else {
            prevList[index] = {index:index,title:itemData,isCompleted:true,isDeleted:false};
        }
        this.setState({todoList: prevList});
    }

    constructor(props){
        super(props);
        this.state = {
            isInputEmpty:true,
            todoInput: '',
            todoList:[]
        };
    }

    handleTodoChange(event){
        const inputValue = event.target.value;
        this.setState({todoInput:inputValue});
        if(this.state.todoInput === ''){
            this.setState({isInputEmpty:true});
        }else{
            this.setState({isInputEmpty:false});
        }
    }

    handleCreate(){
        if(this.state.isInputEmpty===false){
            let prevList = this.state.todoList;
            prevList.push({index:prevList.length,title:this.state.todoInput,isCompleted:false,isDeleted:false});
            this.setState({todoList:prevList,todoInput:'',isInputEmpty:true});
        }
    }

    render(){
        return (
            <div>
                <header>
                    <input onClick={(event)=>{event.target.value=''}} onChange={(event)=>{this.handleTodoChange(event)}}/>
                    <input className="create-btn" type="submit" value="Create" onClick={()=>{this.handleCreate()}}/>
                </header>
                <main>
                    <div className='todo-container'>
                    {this.state.todoList.map((todoItem) => {
                        return (
                            <TodoItem
                                inputCallBack = {this.callbackFunction}
                                todoTotalList = {this.state.todoList}
                                todoTitle= {todoItem.title}
                                indexOfTodo = {todoItem.index}
                                todoIsCompleted= {todoItem.isCompleted}
                                isTodoDeleted= {todoItem.isDeleted}
                            />
                        );
                    }) }
                    </div>
                </main>
            </div>
        );
    }
}

export default TodoInput;