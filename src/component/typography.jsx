import React from "react";
import { useEffect , useState } from 'react';
import axios from 'axios';
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";


export const MuiTypography = () => {
    const[para,setPara] = useState(0)
    const[paraIndex,setParaIndex] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response.data)
            setPara(response.data.map((post)=>post.body))
        })
        .catch(error =>{
            console.log(error)
        });
    },[]);
    
    const handlepara =()=>{
        setParaIndex((paraIndex+1)%para.length)
    };
    

    return (
        <div>
            <div style ={{
            color:"white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            backgroundColor:"hotpink",
        }}>
                  <div style={{margin:"auto"}}><Typography variant="h3">H1</Typography></div>
                  <div style={{margin:"auto"}}><Typography variant="h3">H2</Typography></div>
                  <div style={{margin:"auto"}}><Typography variant="h3">H3</Typography></div>
                  <div style={{margin:"auto"}}><Typography variant="h3">H4</Typography></div>
                  <div style={{margin:"auto"}}><Typography variant="h3">H5</Typography></div>
                  <div style={{margin:"auto"}}><Typography variant="h3">H6</Typography></div>
                  </div>
                  <div style={{
                    color:"white",
                    margin:"auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",    
                    backgroundColor:"hotpink",
                    height:"30vh",
                    }}>
                     <div style={{padding:"50px"}}><Typography variant="body1">{para[paraIndex]}</Typography></div>
                     <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "30px",
                                }}>
                    <Button variant="contained" color="primary" onClick={handlepara} >Next</Button>
                        </div>                       
                    </div>
            </div>
    
    );
                }