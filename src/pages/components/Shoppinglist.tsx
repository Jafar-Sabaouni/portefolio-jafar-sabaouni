import React from 'react';
import {useState} from "react";


interface    ShoppingItem {
  itemName: string;
  itemQuantity: number;
}

const ShoppingList = () => {
  const [listitems, setListitems] = useState<ShoppingItem[]>([]);
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [alerttext, setAlerttext] = useState<string>('');

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }
  const handleChangeQuantity: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuantity(Number(event.target.value));
  }
  const handleChangeAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    let newitem:ShoppingItem = {itemName: name,itemQuantity:quantity};
    if (quantity == 0) {
      setAlerttext(`quantity cannot be 0`)
    }else if (name.length == 0) {
      setAlerttext(`name cannot be empty`)
    }
    else{
    const listitemsCopy = [...listitems,newitem];
    setListitems([...listitemsCopy])
    setAlerttext(`item ${name} is added`)
    }
    
  }
  const DropItem = (pindex:number,pname:string)=>{
    const listitemsCopy = listitems.filter(function (e, index) {return index != pindex;})
    setListitems([...listitemsCopy])
    setAlerttext(`item ${pname} is deleted`)
  }


  return (
    <>
    <h4>{alerttext}</h4>
    <div>
      <p>naam: </p><input type="text" id="name" onChange={handleChangeName}  value={name}/>
    </div>
    <div>
      <p>quantity</p><input type="text" id="name" onChange={handleChangeQuantity}  value={quantity}/>
    </div>
      <button onClick={handleChangeAdd}>Add</button>

    <table>
        <tr>
          <th>Name</th>
          <th>quantity</th>
          <th></th>
        </tr>
        {
          listitems.map((listitems: ShoppingItem,index) =>
            <React.Fragment key={index}>
              <tr>
                <td>{listitems.itemName}</td>
                <td>{listitems.itemQuantity}</td>
                <td><button onClick={() => DropItem(index,listitems.itemName)}>remove</button></td>
              </tr>
            </React.Fragment>
          )
        }

      </table>

    </>
  );
}
export default ShoppingList;