import React,{Component} from 'react';
export default class MyForm extends Component{
    constructor(props){
        super(props);
         this.handleInputChange=this.handleInputChange.bind(this);
          this.handlePassChange=this.handlePassChange.bind(this);
        this.handleTextChange=this.handleTextChange.bind(this);
        this.handleRadioChange=this.handleRadioChange.bind(this);
        this.handleCheckChange=this.handleCheckChange.bind(this);
        this.handleSelectChange=this.handleSelectChange.bind(this);

        this.state={
            inputValue:"",
            passValue:"",
            textValue:"",
            radioVlue:"",
            food:[],
            area:'',
        };
    }
   handleInputChange(e){
       this.setState({
           inputValue:e.target.value,
       });
       console.log(e.target.value);
   }
   handlePassChange(e){
       this.setState({
           passValue:e.target.value,
       });
       console.log(e.target.value);
   }
   handleTextChange(e){
       this.setState({
           textValue:e.target.value,
       });
   }
   handleRadioChange(e){
       this.setState({
           radioVlue:e.target.value,
       });
       console.log(e.target.value);
   }
   handleCheckChange(e){
       const {checked,value}=e.target;
       let {food}=this.state;
       if(checked&&food.indexOf(value)===-1){
           food.push(value);
       }else{
           food=food.filter(i=>i!==value);
       }
       this.setState({
           food
       })
       console.log(food);
   }
   handleSelectChange(e){
       const {area}=this.state;
       this.setState({
           area:e.target.value,
       })
       console.log(e.target.value);
   }

   render(){
       const {inputValue,passValue,textValue,radioVlue,food,area}=this.state;
       return(
           <div>
                <p>账号：<input type="text" value={inputValue} onChange={this.handleInputChange}></input></p>
                <p>密码：<input type="password" value={passValue} onChange={this.handlePassChange}></input></p>
                <p>多行输入框：<textarea value={textValue} onChange={this.handleTextChange}></textarea></p>
                <div>
                    <p>性别：</p>
                    <label htmlFor="#">male:
                        <input type="radio" value="male" checked={radioVlue==='male'} onChange={this.handleRadioChange}/>
                    </label>
                      <label htmlFor="#">female:
                        <input type="radio" value="female" checked={radioVlue==='female'} onChange={this.handleRadioChange}/>
                    </label>
                    <p>请选择你喜欢的水果</p>
                    <label htmlFor="">
                        <input type="checkbox" value="apple" checked={food.indexOf('apple')!==-1} onChange={this.handleCheckChange}/>
                        苹果
                    </label>
                     <label htmlFor="">
                        <input type="checkbox" value="banana" checked={food.indexOf('banana')!==-1} onChange={this.handleCheckChange}/>
                        香蕉
                    </label>
                     <label htmlFor="">
                        <input type="checkbox" value="orange" checked={food.indexOf('orange')!==-1} onChange={this.handleCheckChange}/>
                        橙子
                    </label>
                     <label htmlFor="">
                        <input type="checkbox" value="mongo" checked={food.indexOf('mongo')!==-1} onChange={this.handleCheckChange}/>
                        芒果
                    </label>
                    <p>请选择你所在城市</p>
                    <select value={area} onChange={this.handleSelectChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>
                        <option value="shenzheng">深圳</option>
                    </select>
                    <p>
                        <button type="button">提交</button>
                        大家好
                    </p>
                </div>
           </div>
       )
   }
}