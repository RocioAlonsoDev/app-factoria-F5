import axios from 'axios';
import { useState, useEffect } from 'react';

export default function APIservice (url,method,params){
    const [data, setData] = useState(null);

    const getData = async (url) => {
            try {
            const response = await axios.get(url);
            const responseData = response.data
            
            setData(responseData);
            } catch (error) {
            console.error(error);
            setData(null);
            }
    };

    // const postData = async (url,params) =>{
    //     try{
    //         const response = await axios.post(url, params)
    //         console.log(response);
    //         setData(response);
    //     }catch(error){
    //         console.error(error);
    //         setData(null);
    //     }
    // }

    useEffect(() => {
        switch(method){
            case 'READ' : 
            getData(url);
            break;
            // case 'CREATE' :
            // postData(url,params);
            // break;
        }
    }, [url,method,params]);
        
    return data;
}
    

       
