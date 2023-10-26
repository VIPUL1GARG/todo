import { useEffect, useState } from "react";
import Input from "./Input";
import Todo from "./Todo";
import Restore from "./Restore";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [redata, setRedata] = useState([]);
  const addItem = (item) => {
    setTodo([...todo, item]);
  };
  const removeItem = (index) => {
    setRedata([todo[index], ...redata]);
    const newData = todo.filter((d, ind) => {
      if (ind == index) return false;
      else return true;
    });
    setTodo(newData);
    //  if(newData.length==0){
    //     localStorage.setItem("leftSide", JSON.stringify(newData));
    //   }
  };
  const addBack = (index) => {
    setTodo([redata[index], ...todo]);
    const newData = redata.filter((d, ind) => {
      if (ind === index) return false;
     
      else return true;
    });
    setRedata(newData);
    // if(newData.length==0){
    //   localStorage.setItem("rightSide", JSON.stringify(newData));
    // }
  };
  useEffect(() => {
    const IsTodo = localStorage.getItem("leftSide");
    const IsDone = localStorage.getItem("rightSide");
    if (IsTodo != undefined) {
    // if (IsTodo) {
      setTodo(JSON.parse(IsTodo));
      // Ls to state
      // JSON.parse -> convert JSON string to array
    }
    if (IsDone != undefined) {
    // if (IsDone) {
      setRedata(JSON.parse(IsDone));
    }
  }, []);
  useEffect(() => {
    if (todo.length !== 0) {
      localStorage.setItem("leftSide", JSON.stringify(todo));
      // state to local storage
      // JSON.stringify-> JS arrey to JSON string
    }
    if(todo.length==0){
      localStorage.removeItem("leftSide")
    }
    if (redata.length !== 0) {
      localStorage.setItem("rightSide", JSON.stringify(redata));
    }
    if(redata.length==0){
      localStorage.removeItem("rightSide")
    }
  }, [todo, redata]);
  return (
    <div className="container">
      <Input itemHandler={addItem} />
      <div className="row  mt-2">
        <Todo data={todo} remove={removeItem} />
        <Restore res={redata} addBack={addBack} />
      </div>
    </div>
  );
}
