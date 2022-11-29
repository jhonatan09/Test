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


  const [loading, setLoading] = useState<boolean>(true);




  const handleClickRemove = (id: number) => {
    const index = data.findIndex(index => index.id === id)
    data.splice(index, 1);
    setDataNew(data)
    setData([])
    setData(data)
    setDataNew([])
  };

  const handleClickUpdate = (id:number, brand:string, category:string, title:string, description:string, price:number, discount:number, rating:number, stock:number) => {
   const newArr = data.map(object => {
    if(object.id === id){
        return{...object, brand:brand, category:category, title:title, description:description, price:price, discount:discount, rating:rating, stock:stock}
    }
    return object;
   })

   setData(newArr)

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
        handleClickUpdate
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };