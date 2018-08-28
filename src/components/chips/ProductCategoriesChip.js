import React from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import { css } from 'emotion'

import {JustFlex} from '../styles/mixin'

// Material Styles
const styles = {
  StyledChip: {
    background: "#fff",
    borderRadius: "6.25rem",
    border: "1px solid #4a4a4a",
    cursor: 'pointer',
    margin: '.5rem'
  }
};

const selected = css`
  background: #ffe79c !important;
  font-weight: bold;
`

const ProductCategoriesChip = props => {
  const { classes } = props;

  return (
    <div className={JustFlex}>
      <Chip className={`${classes.StyledChip} ${selected}`} label="All Categories" />
      <Chip className={classes.StyledChip} label="Salwar Kameez: Unstiched Kameez" />
      <Chip className={classes.StyledChip} label="Salwar Kameez: Unstiched Kameez" />
      <Chip className={classes.StyledChip} label="Salwar Kameez: Unstiched Kameez" />
    </div>
  );
};

export default withStyles(styles)(ProductCategoriesChip);
