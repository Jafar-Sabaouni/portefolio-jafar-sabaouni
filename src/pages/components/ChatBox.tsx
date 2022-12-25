import React from 'react';
import { useState } from "react";



/*ChatBox*/

interface ChatMessage {
  Name: string;
  Message: string;
  Id: number
}

const ChatBox = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [lastId, setLastId] = useState<number>(1);

  const handleChangeAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    let newMesage: ChatMessage = { Name: name, Message: message, Id: lastId +1};
    setLastId(lastId+1)
    if (message.length !== 0 || name.length === 0) {
      const MessageCopy = [...messages, newMesage];
      setMessages([...MessageCopy])
    }
  }
  const DropItem = (removeId: number) => {
    const MessageCopy = messages.filter(function (e, index) { return e.Id !== removeId; })
    setMessages([...MessageCopy])
  }
  return (
    <>

      <p>Name:<input type="text" id="name" onChange={(event) => { setName(event.target.value) }} />
        Mesage:<input type="text" id="mesage" onChange={(event) => { setMessage(event.target.value) }} />
        <button onClick={handleChangeAdd} >send</button>
      </p>

      <table>
        {
          messages.map((message: ChatMessage, index) =>
            <React.Fragment key={index}>
              <tr>
                <td>{`[mesage: ${message.Id}]`}</td>
                <td style={{ fontWeight: 'bold' }}>{`[${message.Name}]:`}</td>
                <td>{message.Message}</td>
                <td><button onClick={() => DropItem(message.Id,)}>x</button></td>
              </tr>
            </React.Fragment>
          )
        }

      </table>

    </>
  );
}


export default ChatBox;
