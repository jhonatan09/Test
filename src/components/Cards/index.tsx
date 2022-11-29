import React, {useContext} from 'react'
import {CardsTypes} from '../../types'
import {CardContent , ImgCards, CardsContainer, LinkStyle, CardDetails, LinkStyleImg, LinkStyleEdit} from '../../style'
import { DataContext } from "../../store";



const Cards = ({ price, discountPercentage, title, thumbnail, item}: CardsTypes) => {
    const {
        handleClickRemove
         } = useContext(DataContext);
    return (
        <>
            <CardsContainer>
                <CardContent>
                    <LinkStyleImg to={`/product/${title}`} state={item} >
                        <ImgCards src={thumbnail} alt={title} />
                    </LinkStyleImg>
                    <CardDetails>
                    <LinkStyle to={`/product/${title}`} state={{item: item, Notupdate: true}}>
                        <h5>{title}</h5>
                        <span>{price}</span>
                        <span>{discountPercentage}%</span>
                    </LinkStyle>
                    <LinkStyleEdit to={`/product/${title}`} state={{item: item, Notupdate: false}}>
                            editar
                    </LinkStyleEdit>
                    <div style={{cursor: 'pointer'}} onClick={() => handleClickRemove(item.id)}>
                            deletar
                    </div>
                    </CardDetails>
                </CardContent>
            </CardsContainer>
        </>
    )
}

export default Cards