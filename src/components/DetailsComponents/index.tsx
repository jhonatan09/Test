import React, { useContext, useState } from "react";
import { DataContext } from "../../store";
import {DeatilsProductsTypes} from '../../types'
import styled from "styled-components"


import {DetailsComp, DetailsCompContent, DetailsCompImg, DetailsCompSpan, DetailsCompInputSpace, DetailsCompInputDiscont, DetailsCompSpanPrice, DetailsCompTitles, DetailsCompAllImgs, DetailsCompStyleImgs, LinkStyleDetailsProduct} from '../../style'
import Confirmation from "../ConfirmationComponent";




const DetailsComponents = ({item, Notupdate}: DeatilsProductsTypes) => {

const Button = styled.button`
    display: ${Notupdate === true? 'none': 'block'};
    width: 135px;
    height: 40px;
    background: transparent;
    color: #000;
    border: 1 solid #000;
    border-radius: 8px;
    margin-top: 16px;
    &:hover {
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
    }
    `;


    const {
        loading,
        input,
        setLoading
         } = useContext(DataContext);
   
         console.log(input, "input data")

         const [title, setTitle] = useState<string>(item.title);
         const [category, setCategory] = useState<string>(item.category);
         const [brand, setBrand] = useState<string>(item.brand);
         const [description, setDescription] = useState<string>(item.description);
         const [price, setPrice] = useState<number>(item.price);
         const [discount, setDiscount] = useState<number>(item.discountPercentage);
         const [stock, setStock] = useState<number>(item.stock);
         const [rating, setRating] = useState<number>(item.rating);
    return (
        <>
            

            <DetailsComp>
                    <LinkStyleDetailsProduct to={`/`}>
                        Go to Home
                    </LinkStyleDetailsProduct>
                <DetailsCompImg>
                    <img src={item.thumbnail} />
                </DetailsCompImg>
                <DetailsCompContent>
                    <DetailsCompSpan>
                        <DetailsCompTitles>
                            Marcar:
                        </DetailsCompTitles>
                        <DetailsCompInputSpace type="text" value={brand} disabled={Notupdate} onChange={(e:any) => setBrand(e.target.value)}/>   
                    </DetailsCompSpan>
                    <DetailsCompSpan>
                        <DetailsCompTitles>
                            Categoria:
                        </DetailsCompTitles>
                        <DetailsCompInputSpace type="text" value={category} disabled={Notupdate} onChange={(e:any) => setCategory(e.target.value)}/>   
                    </DetailsCompSpan>
                    <DetailsCompSpan>
                        <DetailsCompTitles>
                            Nome produto:
                        </DetailsCompTitles>
                        <DetailsCompInputSpace type="text" value={title} disabled={Notupdate} onChange={(e:any) => setTitle(e.target.value)}/> 
                    </DetailsCompSpan>
                    <DetailsCompSpan>
                        <DetailsCompTitles>
                            Descrição:
                        </DetailsCompTitles>
                        <DetailsCompInputSpace type="text" value={description} disabled={Notupdate} onChange={(e:any) => setDescription(e.target.value)}/> 
                    </DetailsCompSpan>
                    <div>
                        <DetailsCompSpan>
                            <DetailsCompTitles>
                                Preço:
                            </DetailsCompTitles>
                           <DetailsCompSpanPrice>
                             R$ <input type="text" value={price} disabled={Notupdate} onChange={(e:any) => setPrice(e.target.value)}/>
                           </DetailsCompSpanPrice>
                        </DetailsCompSpan>    
                        <DetailsCompSpan>
                            <DetailsCompTitles>
                                Desconto::
                            </DetailsCompTitles>
                          
                            <div>
                                <DetailsCompInputDiscont type="text" value={discount} disabled={Notupdate} onChange={(e:any) => setDiscount(e.target.value)}/>%
                            </div>
                        </DetailsCompSpan>    
                    </div>
                        <DetailsCompSpan>
                            <DetailsCompTitles>
                                Avaliação:
                            </DetailsCompTitles>
                            <DetailsCompInputSpace type="text" value={rating} disabled={Notupdate} onChange={(e:any) => setRating(e.target.value)}/>
                        </DetailsCompSpan>         
                        <DetailsCompSpan>
                            <DetailsCompTitles>
                                Disponiveis em estoque:
                            </DetailsCompTitles>
                            <DetailsCompInputSpace type="text" value={stock} disabled={Notupdate} onChange={(e:any) => setStock(e.target.value)}/>
                        </DetailsCompSpan>
                        <Button onClick={() => setLoading(true)}>Atualizar!</Button>     
                </DetailsCompContent>
            </DetailsComp>
            <DetailsCompAllImgs>
                {item.images.map((item, index) => {
                    return (
                        <DetailsCompStyleImgs key={index} src={item} alt={item}/>
                    )
                })}
            </DetailsCompAllImgs>
            {loading? <Confirmation title={title} deleteData={false} brand={brand} category={category} description={description} discountPercentage={discount} id={item.id} price={price} rating={rating} stock={stock}/> : ''}
        </>
    )
}

export default DetailsComponents