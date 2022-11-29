import React, { useContext } from "react";
import Card from "../../components/Cards";
import Confirmation from "../../components/ConfirmationComponent";
import { DataContext } from "../../store";
import {HomeContainer} from '../../style'

const HomePage = () => {
    const {
        data,
        loading,
        id,
        title
         } = useContext(DataContext);


const cards = data.map( item => {
    return (
        <Card title={item.title}  price={item.price} discountPercentage={item.discountPercentage}  thumbnail={item.thumbnail} item={item}/>
    )
})


    return (
        <>
         <HomeContainer>
            {cards}
         </HomeContainer>
         {loading? <Confirmation id={id} title={title} deleteData={true}/>: ''}
        </>
    )
}

export default HomePage