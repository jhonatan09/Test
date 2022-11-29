import { useContext } from "react";
import Card from "../../components/Cards";
import { DataContext } from "../../store";
import {HomeContainer} from '../../style'

const HomePage = () => {
    const {
        data,
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
        </>
    )
}

export default HomePage