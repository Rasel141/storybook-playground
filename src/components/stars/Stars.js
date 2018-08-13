import React from "react";
import Typography from "@material-ui/core/Typography";

import StarIcon from "@material-ui/icons/Star";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  star: {
    fill: '#ffcc33',
    stroke: "#979797",
    width: ".9em"
  }
};

const Stars = props => {
  const { classes } = props;

  return (
    <div>
      <Typography component="p">
        <StarIcon className={classes.star} />
        <StarIcon className={classes.star} />
        <StarIcon className={classes.star} />
        <StarIcon className={classes.star} />
        <StarIcon className={classes.star} />
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Stars);
