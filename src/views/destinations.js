/* eslint-disable react-hooks/rules-of-hooks */
import React , {useState,useEffect}  from 'react'
import Card from '../components/Card/card'
import useCatImg from '../hooks/useCatImg';
import {Grid, CircularProgress} from '@material-ui/core';
import Search from "../components/SearchBarre/search";
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
import Slider from '../components/Slider/slider'

export default function destinations() {
const cataUrl = useCatImg();
const [loading, setLoading]= useState(true);
const [error, setError]= useState('');
const [data, setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://localhost:44313/api/v1/Catalog?pageSize=10')
        .then((response)=>response.json())
        .then((data)=>{
            setLoading(false);
            setData(data);
        })
        .catch((e)=>{
            setLoading(false);
            setError('fetch failed');
        });
    },[]);

    if(loading){
        return <p>  <CircularProgress color="#00a8cc" /></p>;
    }
     if(error !==''){
     return <p>ERROR.. : {error}</p>;
    }
    return (
        <> 
              <Header/>
      <Navigation/>
      <Slider/>
        <Grid container  alignItems="flex-start"
        justify="center"
        direction="row"
        spacing={2} >
     
        {/* <Search/> */}
         {data.map((test)=>(
             <Grid item md={4}>
             <Card  name={test.name}
            description = {test.description}
                imageUrl ={cataUrl}

            price={test.price}
        /> 
        </Grid>))}
     </Grid>
     </>
       
    )
}
