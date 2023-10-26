import React, {useRef} from "react";

const Input = (props) => {
    const inpRef=useRef();
    function clickHandler(){
      props.itemHandler(inpRef.current.value)
        inpRef.current.value="";
        inpRef.current.focus(); 
    }
  return (
    <div className="row mt-5">
      <input type="text" className="col rounded border border-secondary-subtle inputbox" autoFocus ref={inpRef} />
      <div className="col-auto">
        <button className="btn btn-primary" onClick={clickHandler}> Add</button>
      </div>
    </div>
  );
};


export default Input;
