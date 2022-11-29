import { useLocation } from "react-router-dom";
import DetailsComponents from '../../components/DetailsComponents';
import {LocationState} from '../../types'

const ProductPage = () => {
    const location = useLocation();
    const { state } = location as LocationState;

    return (
        <>
            <DetailsComponents item={state.item} Notupdate={state.Notupdate} />
        </>
    )
}

export default ProductPage