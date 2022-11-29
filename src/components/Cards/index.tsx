import React, {useContext} from 'react'
import {CardsTypes} from '../../types'
import {CardContent , ImgCards, CardsContainer, LinkStyle, CardDetails, LinkStyleImg, LinkStyleEdit, CardsSpan, CardsSpanDiv, CardsTitle, CardBtnRemove} from '../../style'
import { DataContext } from "../../store";



const Cards = ({ price, discountPercentage, title, thumbnail, item}: CardsTypes) => {
    const {
        handleClickRemove,
        handleClickRemoveOpenPopup
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
                        <CardsTitle>{title}</CardsTitle>
                        <CardsSpanDiv>
                            <CardsSpan>
                                <span>Preço:</span>
                                    R$ {price}
                                </CardsSpan>
                            <CardsSpan>
                                <span>Desconto:</span>
                                {discountPercentage}%
                            </CardsSpan>
                        </CardsSpanDiv>
                       
                    </LinkStyle>
                    <LinkStyleEdit to={`/product/${title}`} state={{item: item, Notupdate: false}}>
                            editar
                    </LinkStyleEdit>
                    <CardBtnRemove  onClick={() => handleClickRemoveOpenPopup(item.id, item.title)}>
                            deletar
                    </CardBtnRemove>
                    </CardDetails>
                </CardContent>
            </CardsContainer>
        </>
    )
}

export default Cards