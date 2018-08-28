import React from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import { css } from 'emotion'

import {JustFlex} from '../styles/mixin'

// Material Styles
const styles = {
  StyledChip: {
    background: "#fff",
    borderRadius: "6px",
    border: "1px solid #4a4a4a",
    cursor: 'pointer',
    margin: '.5rem'
  }
};

const selected = css`
  background: #ffe79c !important;
`

const ProdcutCollectionChip = props => {
  const { classes } = props;

  return (
    <div className={JustFlex}>
      <Chip className={`${classes.StyledChip} ${selected}`} label="All Collections" />
      <Chip className={classes.StyledChip} label="#SrpingLookBook" />
      <Chip className={classes.StyledChip} label="#SrpingLookBook" />
      <Chip className={classes.StyledChip} label="#SrpingLookBook" />
    </div>
  );
};

export default withStyles(styles)(ProdcutCollectionChip);
