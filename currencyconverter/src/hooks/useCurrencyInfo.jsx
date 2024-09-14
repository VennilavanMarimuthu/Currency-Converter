import {useState, useEffect} from 'react';

function useCurrencyInfo(currency){
    const [data,getData]=useState({});

    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/ad968d3f0a6436247fd7babb/latest/${currency}`)
        .then((res)=>res.json()).then((res)=>getData(res["conversion_rates"]))
    },[currency])

    

    return data;
}

export default useCurrencyInfo;