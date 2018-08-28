import React from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { css } from 'emotion'


const styles = {
  StyledButton: {
    width: "100%",
    background: "#ffe79c",
    color: "#403e29",
    borderRadius: "4px",
    border: "1px solid #b1a8a8",
    padding: "0 30px",
    transition: "all 0.4s",
    fontWeight: " bold",

    "&:hover": {
      background: "#d4414e",
      color: "#fff"
    }
  }
};

const BuyBtn = props => {
  const { classes } = props;

  return (
    <div className={css`width: 250px`}>
      <Button className={classes.StyledButton}>Buy</Button>
    </div>
  );
};

export default withStyles(styles)(BuyBtn);
