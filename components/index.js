import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.js';
import MyForm from './MyForm';
class Container extends Component{
    render(){
        return(
            <div>
                <Counter/>
                <MyForm/>

            </div>
        )
    }
}
ReactDOM.render(<Container/>,document.getElementById("container"));