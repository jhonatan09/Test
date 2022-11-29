import React, { createContext, useState, useEffect } from "react";
import { AppContextInterface, Props, responseTypes } from "../types";


import api from "../services/api";

const DataContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

function DataContextProvider({ children }: Props) {
  const [data, setData] = useState<responseTypes[]>([]);

  const [input, setInput] = useState<string>("");

  const [dataNew, setDataNew] = useState<responseTypes[]>([]);
  const [title, setTitle] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);




  const handleClickRemove = (id: number) => {
    const index = data.findIndex(index => index.id === id)
    data.splice(index, 1);
    setDataNew(data)
    setData([])
    setData(data)
    setDataNew([])
    setLoading(false)
  };

  const handleClickUpdate = (id:number, brand:string, category:string, title:string, description:string, price:number, discount:number, rating:number, stock:number) => {
   const newArr = data.map(object => {
    if(object.id === id){
        return{...object, brand:brand, category:category, title:title, description:description, price:price, discount:discount, rating:rating, stock:stock}
    }
    return object;
   })
   setLoading(false)
   setData(newArr)

  };
 

  const handleClickRemoveOpenPopup = (id: number, title: string) => {
    setLoading(true)
    setId(id)
    setTitle(title)
  };

  useEffect(() => {
    api.get(`products`).then((response) => {
      setData(response.data.products);
 
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        input,
        setInput,
        handleClickRemove,
        loading,
        setLoading,
        handleClickUpdate,
        handleClickRemoveOpenPopup,
        id,
        title
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };