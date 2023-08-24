import axios from 'axios';
import { useState, useEffect } from 'react';

export default function APIservice (url,method){
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

    useEffect(() => {
        switch(method){
            case 'READ' : 
            getData(url);
            break;
        }
    }, [url,method]);
        
    return data;
}
    

       
