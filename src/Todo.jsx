import React from "react";

const Todo = (props) => {
  return (
  
      <ul className="list-group col-6">
        {
              props.data.map(
                (item,i)=>{
                  return <li key={i} className="list-group-item list-group-item-secondary mt-2 ps-3 vi">{item} <span onClick={
                    ()=>{
                      props.remove(i)
                    }
                  }>X</span> </li>
                }
              )
        }
      </ul>
    
  );
};

export default Todo;
