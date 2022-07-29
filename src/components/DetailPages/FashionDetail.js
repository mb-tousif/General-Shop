import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFashionDetail } from '../../Redux/Action/fashionAction';

const FashionDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const {fashion} = useSelector(state=> state.getFashionDetail)
    useEffect(()=>{
        dispatch(getFashionDetail(id))
    }, [dispatch, id, fashion]);
    console.log(fashion);
    return (
        <div>
            <h1>Help</h1>
        </div>
    );
};

export default FashionDetail;