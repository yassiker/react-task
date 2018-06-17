import React from 'react';

const TextArea = (props) => {


    return (
      <form className="navbar-form" >
        <div className="input-group add-on">
          <input type="text" className="form-control" onChange={props.changeEvent} value={props.children} placeholder="test attribute" />
          <div className="input-group-btn">
            <button className="btn btn-default" onClick={props.delEvent}><i className="glyphicon glyphicon-remove"></i></button>
          </div>
        </div>
      </form>
    )
  
}

export default TextArea;
