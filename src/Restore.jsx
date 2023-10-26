import React, { useState } from 'react';

const Restore = (props) => {
    return (
        <ul className="list-group col-6">
        {
            props.res.map(
                (rest,i)=>{
                    return <li key={i} className=' list-group-item list-group-item-secondary mt-2 ps-3'>{rest}<span onClick={
                        ()=>{
                          props.addBack(i)
                        }
                      }>X</span></li>
                }
            )
        }
        </ul>
    );
}

export default Restore;
