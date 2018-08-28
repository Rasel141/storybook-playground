import React from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { css } from 'emotion'

// Material Styles
const styles = {
  StyledButton: {
    background: "#ffe79c",
    color: "#403e29",
    borderRadius: "8px",
    border: "2px solid #b1a8a8",
    padding: "0 30px",
    transition: "all 0.4s",
    fontWeight: " bold",

    "&:hover": {
      background: "#d4414e",
      color: "#fff"
    }
  }
};

// Emotion Styles
const marginRight = css`
    margin-right: .5em;
`

const FollowBtn = props => {
  const { classes } = props;

  return (
    <div className={css`width: 100px`}>
      <Button className={classes.StyledButton}> <span className={marginRight}> + </span> Follow</Button>
    </div>
  );
};

export default withStyles(styles)(FollowBtn);
