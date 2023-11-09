import React from "react";
import { Typography } from "@material-ui/core";


export const MuiTypography = () => {
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
        </div>
)}