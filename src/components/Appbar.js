import {AppBar,Toolbar, Typography} from "@material-ui/core";
import React from "react";
// import Asynchronous from "./search";
import ImageAvatars from "./logo";
import SearchBar from "./SearchBar";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import App from "./MDBICON";
function Appbar(){
    return(
        <AppBar>
            
            <Toolbar>
            {/* <MDBIcon fab icon="discord" /> */}
                {/* <Typography>Best Anime</Typography> */}
                {/* <Asynchronous/> */}
                <ImageAvatars />
                <SearchBar />
                {/* <InstagramIcon /> */}
            </Toolbar>
        </AppBar>
      
    );
}
export default Appbar;