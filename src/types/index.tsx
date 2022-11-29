import { setDefaultResultOrder } from "dns";
import React, { ReactNode, SetStateAction } from "react";

export interface AppContextInterface {
  data: responseTypes[];
  setData: (newState: []) => void;
  input: string;
  setInput: (c: string) => void;
  handleClickRemove(e: any): void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  handleClickUpdate(a: number, b:string, c:string, d:string, e:string, f:number, g:number, h:number, i:number) : void;
}
export interface Props {
  children: ReactNode;
}

export interface responseTypes {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: []

}



export interface Contexts {
  name: string;
  price: string;
  type: string;
}




export interface CardsTypes {
    price: number;
    discountPercentage: number;
    title: string;
    thumbnail: string;
    item: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: []
    }
}



export interface LocationState {
    state: {
     item: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: []
     }
     Notupdate: boolean
    }
}


export interface DeatilsProductsTypes {
    item: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: []
     }
     Notupdate: boolean
}


export interface ConfirmationTypes {
    deleteData: boolean;
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
}