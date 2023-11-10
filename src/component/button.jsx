import React from "react";
import { Button } from "@material-ui/core";


export const MuiButton = () => {

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
                  <div style={{margin:"auto"}}><Button variant="contained" color="primary">Next</Button></div>
                  <div style={{margin:"auto"}}><Button variant="contained" color="secondary">Secondary</Button></div>
                  <div style={{margin:"auto"}}><Button variant="contained" color="default">Default</Button></div>
                  <div style={{margin:"auto"}}><Button variant="contained" color="inherit">Inherit</Button></div>
                  <div style={{margin:"auto"}}><Button variant="contained" color="primary" disabled>Disabled</Button></div>
                  <div style={{margin:"auto"}}><Button variant="contained" color="primary" href="#contained-buttons">Link</Button></div>
                  </div>
            </div>
    )

}
