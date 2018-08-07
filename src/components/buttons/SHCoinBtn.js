import React from "react";

// Import Material Components
import Button from "@material-ui/core/Button";

// Import Material Styles
import { withStyles } from "@material-ui/core/styles";

// Import Local Image
import logo from "../../imgs/logo.svg";

// Import Custom Style Variable
import  {white, lightBlue2, lightBlue3, lightGray} from "../styles/colors";

// Material Styles
const styles = {
  shCoin: {
    borderRadius: '10px',
    backgroundColor: lightBlue2,
    border: `1px solid ${lightGray}`,
    transition: 'all 0.5s',
    padding: 0,
    minWidth: '5.5rem',

    '&:hover': {
      backgroundColor: lightBlue3
    }
  },
  shCoinPrize: {
    color: white,
    fontWeight: 'bold',
    fontSize: '0.7rem'
  },
  shCoinLogo: {
    width: '1.25rem',
    marginRight:'2px'
  }
} 


const shCoinBtn = (props) => {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.shCoin}>
        <img className = {classes.shCoinLogo} src={logo} alt="SH Logo" />
        <span className={classes.shCoinPrize}> ৳ 5000,000 </span>
      </Button>
    </div>
  );
};

export default withStyles(styles)(shCoinBtn);

