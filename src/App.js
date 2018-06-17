import React, { Component } from 'react';
import UniqueID from 'react-html-id';

import TextArea from './TextArea';

class App extends Component {

  constructor(){
    super();
    UniqueID.enableUniqueIds(this);
    this.state = {
        data:[
          {id:0, textInput:''},
        ],
        index: 0,
        modify: false
      };
  }

  deleteInputItem = (index, e) => {
    const tempData = Object.assign([], this.state.data);
    tempData.splice(index, 1);
    this.setState({data:tempData});
  }

  deleteAll = () => {
    console.log('delete all');
    const tempData = [{id:0, inputValue:''}];
    this.setState({data:tempData});
  }

  addNewInputItem = (id, event) => {
    if (event.target.value.length === 0) {
      return;
    }
    
    const index = this.state.data.findIndex((element)=> {
        return (element.id === id);
    })

    const inputElement = Object.assign({}, this.state.data[index]);
    inputElement.inputValue = event.target.value;

    const tempData = Object.assign([], this.state.data);
    tempData[index] = inputElement;

    if (event.target.value.length === 1 && !this.state.modify) {

      this.setState({
        data:tempData.concat({id:this.state.index + 1, inputValue:''}),
        index: this.state.index + 1
      });
    }else{
      this.setState({data:tempData});
    }
    
  }

  onChange = (e) => {
    e.preventDefault();
    const arrayLength = this.state.data.length;
    
    let enteredData = [
      ...this.state.data.slice(0, arrayLength - 1)
    ];

    console.log("Entered data: " + enteredData)
    
  }

  render(){

    return (
      <div>
        <ul>
          {
            this.state.data.map((element, index) => {
              return (
              <div key={index}>
                <TextArea
                  delEvent={this.deleteInputItem.bind(this,index)}
                  changeEvent={this.addNewInputItem.bind(this, element.id)}
                  key={element.id} >{element.inputValue}
                </TextArea>
              </div>
              )
            })
          }
        </ul>
        <nav className="navbar navbar-default navbar-fixed-bottom">
          <div className="container">        
            <button type="button" id="saveButton" className="btn btn-default pull-right" onClick={this.onChange}>SAVE</button>
            <button type="button" id="cancelButton" className="btn btn-default pull-right" onClick={this.deleteAll}>CANCEL</button>
          </div>
        </nav>
      </div>
    )
  }
}
export default App;