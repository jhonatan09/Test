import styled from "styled-components"
import {black, blue, red} from './colors'
import {Link} from "react-router-dom";



export const CardsContainer = styled.div`
width: 480px;
height: 300px;
margin: 16px;
border: 1px dashed ${black};
border-radius: 8px;
`;

export const ImgCards = styled.img`
width: 100%;
height: 100%;
`;


export const CardDetails = styled.div`
padding: 2%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
`


export const HomeContainer = styled.div`
display: flex;
flex-direction: row;
width: 90%;
height: 100%;
min-height: 100vh;
flex-wrap: wrap;
`;

export const LinkStyle = styled(Link)`
text-decoration: none;
width: 100%;
font-size: 15px;
font-weight: 500;
`;

export const LinkStyleImg = styled(Link)`
text-decoration: none;
width: 50%;
`;


export const CardContent = styled.div`
display: flex;
flex-direction: row-reverse;
height: inherit;
`;


export const DetailsComp = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
height: 100%;
flex-wrap: wrap;
padding-top: 3rem;
position: relative;
` ;


export const DetailsCompImg = styled.div`
width: 50%;
`;

export const DetailsCompContent = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 46%;
padding: 2%;
justify-content: center;
`;

export const DetailsCompSpan = styled.span`
display: flex;
flex-direction: column;
width: 100%;
font-size: 15px;
`

export const DetailsCompInputSpace = styled.input`
margin-left: 16px;
`

export const DetailsCompInputDiscont = styled.input`
margin-left: 16px;
width: 37px;
`
export const DetailsCompSpanPrice = styled.span`
margin-left: 16px;
`

export const DetailsCompTitles = styled.h6`
color: ${black};
font-weight: 600;
font-size: 18px;
margin: 4px 0;
`


export const DetailsCompAllImgs = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 100%;
margin-top: 32px;
`

export const DetailsCompStyleImgs = styled.img`
width 48%;
margin: 1%;
height: 450px;
`


export const LinkStyleDetailsProduct = styled(Link)`
color: ${black}; 
text-decoration: inherit;
font-size: 18px;
position: absolute;
top: 16px;
left: 16px;
&:hover{
    opacity: 0.7;
}
`;


export const LinkStyleEdit = styled(Link)`
text-decoration: none;
color: ${black}; 
font-size: 15px;
font-weight: 900;
text-decoration: inherit;
width: 40%;
height: 20px;
background: aqua;
padding: 2%;
text-align: center;
&:hover{
    color: ${blue};
}

`;


export const PopUpConfimnation = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
flex-direction: column;
position: absolute;
z-index: 12;
top: 0;
background: rgba(0,0,0, 0.6);
`


export const LinkStyleEdited = styled(Link)`
color: ${black};
font-size: 12px;
font-weight: 900;
width: 150px;
height: 50px;
border: 1px solid ${black}; 
padding: 6px;
  text-decoration: inherit; 
  &:hover{
    color: ${blue};
}
`;


export const LinkStyleBackHome = styled(Link)`
color: ${black}; 
  text-decoration: inherit;
  font-size: 12px;
font-weight: 900;
margin: 0 16px;
border: 1px solid ${black}; 
padding: 6px;
&:hover{
    color: ${blue};
}
`;


export const BoxConfirmation= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 450px;
background: #fff;
border: 2px solid #fff; 
border-radius: 4px;
height: 350px;
`;


export const LinkStyleRemove = styled(Link)`
color: ${black}; 
  text-decoration: inherit;
  font-size: 12px;
font-weight: 900;
margin: 0 16px;
width: 120px;
height: 50px;
padding: 6px;
border: 1px solid ${black}; 
&:hover{
    color: ${blue};
}
`;


export const BoxConfirmationTitle= styled.div`
display: flex;
flex-direction: column;
margin-bottom: 16px;
font-size: 18px;
font-weight: 900;
`;


export const BoxConfirmationTitleSpan= styled.span`
font-size: 15px;
font-weight: 700;
`;

export const CardsSpanDiv= styled.div`
display: flex;
flex-direction: column;
font-size: 15px;
font-weight: 500;
color: ${black}
`;


export const CardsSpan= styled.span`
display: flex;
flex-direction: column;
margin: 6px;
`;


export const CardsTitle= styled.h5`
color: ${black};
font-size: 20px;
font-weight: 800;
`;


export const CardBtnRemove = styled.button`
color: ${black}; 
font-size: 15px;
font-weight: 900;
width: 40%;
height: 30px;
background: ${red};
padding: 2%;
text-align: center;
cursor: pointer;
margin-top: 8px;
&:hover{
    color: ${blue};
}
`;