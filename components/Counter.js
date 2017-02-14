import React,{Component} from 'react';
import ReactDOM from 'react-dom';

 let index=0;
export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:index,
        };
    }
    handleClick(e){
        e.preventDefault();
        this.setState({
            count:++index
        });
    }
    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <a href="#" onClick={this.handleClick.bind(this)}>更新</a>
            </div>
        )
    }
}