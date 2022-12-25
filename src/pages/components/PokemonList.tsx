import React from 'react';
import { useEffect, useState } from "react";
import { ColorRing } from  'react-loader-spinner'

export interface ipokeData {
  count: number;
  next: string;
  previous:string;
  results:(ipokemon[])
}
export interface ipokemon{
  name: string;
  url: string;
}

const PokeSearch = (array: ipokemon[] | undefined, search: string) => {
  if (array !== undefined) {
      return array.filter((item: ipokemon) =>
          item.name.toString().toLowerCase().includes(search.toLowerCase())
      );
  }
  return ;
}

const PokeList = () =>{
  const [searchInput, setSearchInput] = useState<string>("");
  const [amount, setAmount] = useState<number>(10);
  const [pokeData, setPokeData] = useState<ipokeData|undefined>();
  const [pokeLijst, setPokeLijst] = useState<ipokemon[]>();
  const [sendRequest, setSendRequest] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeSet: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLoading(true); 
    setPokeData(undefined);
    setSendRequest(true)

  }
  useEffect(() => {
    
    const fetchFunction = async() => {
      
      let url:string = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`
      let result = await fetch(url);
      let json:any = await result.json();
      setPokeData(json);
      console.log(json.results)
      
    } 
    fetchFunction();
    return () => {
      setSendRequest(false)
    }
    
  },[sendRequest]);

  useEffect(() => {
    if (pokeData !== undefined) {
      if (searchInput !== "") {
        setPokeLijst(PokeSearch(pokeData.results, searchInput));
      } else {
        setPokeLijst(pokeData.results);
      }
    }
    
    setLoading(false);
  }, [searchInput, pokeData]);

 

  return (
      <>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      {pokeData && 
      <ul>
      {
          pokeLijst?.map((Lijst: ipokemon,index) =>
            <div key={index}>
              <li>{Lijst.name}</li>
            </div>
          )
        }
      </ul> }
      {loading &&
    <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
      }
      
      <input type="number" value={amount} onChange={(e) => {setAmount(Number(e.target.value))}}/>
  
      <button onClick={handleChangeSet}>set</button>
      </>
    
      
    
  )
}




export default PokeList;