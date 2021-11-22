import React, { useEffect,useState } from "react";
import Router from 'next/router'
import {useToken} from '../components/Token';

const IndexPage = () => {
  const [loaded,setLoaded] = useState(false);
  const {token} = useToken();

    useEffect(() => {
        const {pathname} = Router;
 
        if(pathname == '/' ){
            if (token == '') {
              location.replace('/login');
            } else {
              location.replace('/list');
            }
        }else{
            setLoaded(true)
        }
      },[]);

    if(!loaded){
        return <div></div> //show nothing or a loader
    }
    return ( 
        <p>
            You will see this page only if pathname !== "/" , <br/>
        </p> 
    )  
}

export default IndexPage