import React, { useContext } from "react";
import { DataContext } from "../../store";
import {ConfirmationTypes} from '../../types'
import {} from '../../style'
import {PopUpConfimnation, BoxConfirmation, LinkStyleBackHome, LinkStyleEdited, LinkStyleRemove, BoxConfirmationTitle, BoxConfirmationTitleSpan} from '../../style'

const Confirmation = ({ title, deleteData, brand, category, description, discountPercentage, id, price ,rating ,stock}: ConfirmationTypes) => {

    const {
        handleClickUpdate,
        handleClickRemove
         } = useContext(DataContext);
    return (
        <>
          <PopUpConfimnation>
             <BoxConfirmation>
                <BoxConfirmationTitle>
                    Produto:
                    <BoxConfirmationTitleSpan>{title}</BoxConfirmationTitleSpan>
                </BoxConfirmationTitle>
                <div>
                    <LinkStyleBackHome to={'/'}>
                            Voltar e cancelar
                    </LinkStyleBackHome>
                    {deleteData?  
                        <LinkStyleRemove to={'/'} onClick={() => handleClickRemove(id)}>
                            Comfirmar remoção do item
                        </LinkStyleRemove>
                    :
                    <LinkStyleEdited to={'/'} onClick={() => handleClickUpdate(id, brand, category, title, description, price, discountPercentage, rating, stock)}>
                        Comfirmar Atualização
                    </LinkStyleEdited>
                    }
                </div>
             </BoxConfirmation>
             
          </PopUpConfimnation>
        </>
    )
}

export default Confirmation