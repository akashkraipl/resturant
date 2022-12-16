import React from "react";
import {
    AppBar,
    Toolbar,
    Typography
} from "@mui/material";

const Footer = () => <>
    <AppBar position="static" elevation={0} component="footer" color="default" style={{
        marginTop: "20px",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center"
    }}>
        <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="caption">Copy Rights ©2022</Typography>
        </Toolbar>
    </AppBar>
</>

export default Footer;