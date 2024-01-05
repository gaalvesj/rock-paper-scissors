import styled  from "@mui/system/styled";
import Button from '@mui/material/Button/Button';


export const StyledButton = styled(Button)({
    background: "#4c1d95",
    color: "white",
    paddingTop: "0.5rem",
    margin: "1rem",
    fontSize: "1.2rem",
    fontFamily: "bold",
    padding: "0.3rem 7rem",
    "&:hover": {
      background: "#3b0764",
    }
})