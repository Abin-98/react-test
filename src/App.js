import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Button from "./Button";
const App = () => {
  const [list, setList] = useState([]);
  const [total, setTotal]=useState(0);
  const getData = (data) => {
    setList((prev) => {
      const temp = [...list];
      temp.unshift(data);
      return temp;
    });
    setTotal(total+data.price)
  };
  const handleDelete = (ID) => {
    
    setList((prev)=>{
      return prev.filter(e=>e.id!==ID);
    })
    const deletedPrice=JSON.parse(localStorage.getItem(ID))
    setTotal(total+deletedPrice.price);
    localStorage.removeItem(ID);
  };
  return (
    <>
      <header>
        <Input userInput={getData} />
      </header>
      <main>
        <h1>Products</h1>
        {list.map((e, i) => {
          return (
            <li key={e.id}>
              {e.price}-{e.product}{" "}
              <Button identifier={e.id} onClick={handleDelete}>Delete</Button>
            </li>
          );
        })}
      </main>
      <h2>Total Value Worth of Product: Rs. {total}</h2>
    </>
  );
};

export default App;
