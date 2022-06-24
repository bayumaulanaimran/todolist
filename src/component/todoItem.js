import React from "react";

class TodoItem extends React.Component{

    sendUpdateData = (data,perintah,index)=>{
        this.props.inputCallBack(data,perintah,index);
        console.log('Berhasil terupdate');
    }

    constructor(props){
        super(props);
        this.state={
            isTodoCompleted:this.props.todoIsCompleted,
            isBeingUpdated:false,
            isDeleted:this.props.isTodoDeleted,
            hasEditError:false,
            index:this.props.indexOfTodo,
            todoTitle:this.props.todoTitle
        };
    }

    handleClickUpdate(){
        this.setState({isBeingUpdated:true});
    }

    handleCancelUpdate(){
        this.setState({isBeingUpdated:false});
    }

    handleClickDelete(){
        // this.sendUpdateData(this.state.todoTitle,"hapus",this.state.index);
        this.setState({isDeleted:true});
    }

    handleChangeTitle(event){
        this.setState({todoTitle:event.target.value});
    }

    handleClickComplete(){
        this.setState({isTodoCompleted:true});
        this.sendUpdateData(this.todoTitle,"komplit",);
    }

    handleUpdateSubmit(){        
        this.sendUpdateData(this.state.todoTitle,"ubah",this.props.indexOfTodo);
        this.setState({isBeingUpdated:false});
    }

    render(){
        let todoItemContent;
        if(this.state.isBeingUpdated){
            todoItemContent = (
                <div
                    className='todo-item'
                >
                    <input className="todotitle" defaultValue={this.state.todoTitle} onChange={(event)=>{this.handleChangeTitle(event)}}/>
                    <button className="create-btn" onClick={()=>{this.handleUpdateSubmit()}}>Submit</button>
                    <button className="cancel-btn" onClick={()=>{this.handleCancelUpdate()}}>Cancel</button>
                </div>
            );
        }
        else
        {
            todoItemContent = (
                <div
                    className='todo-item'
                >
                    <label className="todotitle">{this.state.todoTitle}</label>
                    <button className="create-btn" onClick={()=>{this.handleClickComplete()}}>Complete</button>
                    <button className="create-btn" onClick={()=>{this.handleClickUpdate()}}>Update</button>
                    <button className="delete-btn" onClick={()=>{this.handleClickDelete()}}>x</button>
                </div>
            );
        }

        let completedClassName;
        if(this.state.isTodoCompleted){
            completedClassName = 'todo-card completed';
        }else{
            completedClassName = 'todo-card';
        }

        if(this.state.isDeleted){
            return;
        }
        return (
            <div className={completedClassName}>
                {todoItemContent}
            </div>
        );
    }
}

export default TodoItem;