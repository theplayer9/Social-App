import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) =>({
  backgroundColor: "white",
}))

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{ xs: "none", sm: "block"}}} >Facebook</Typography>
        <FacebookIcon sx={{display:{ xs: "block", sm: "none"}}} />
        <Search> Search</Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
