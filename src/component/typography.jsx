import React from "react";
import { useEffect , useState } from 'react';
import axios from 'axios';
import { Typography } from "@material-ui/core";


export const MuiTypography = () => {
    const[para,setPara] = useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response.data)
            const onepost =response.data[0]
            setPara(onepost.body)
        })
        .catch(error =>{
            console.log(error)
        });
},[]);
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
                    }}>
                       {para&& <Typography variant="body1">{para}</Typography>}</div>
            </div>
        );
}
