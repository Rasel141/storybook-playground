import React from "react";

// Import Material Styles
import { withStyles } from "@material-ui/core/styles";

// Import Material Components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Import Custom Components
import Stars from "../stars/Stars";
import BuyBtn from "../buttons/BuyBtn";

// Import Emotion
import { css } from "emotion";
import styled from "react-emotion";

// Import Custom Style Variable
import { TextAlignCenter } from "../styles/mixin";

// Material Styled
const styles = {
  card: {
    // width: "100%",
    width: "250px",
    position: "relative"
  },
  media: {
    height: 70,
    paddingTop: "56.25%", // 16:9
    width: "100%",
  },
  title: {
    fontSize: "1rem"
  },
  button: {
    padding: 12
  },
  cardFlex: {
    // width: "100%",
    // display: "flex",
    // flexWrap: "wrap"
  },

  prize: {
    position: "absolute",
    right: 0,
    top: 5,
    padding: "2px 5px",
    color: "#4a4a4a",
    background: " #FFC400",
    boxShadow: "none",
    borderRadius: 0,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    border: " .5px solid #4a4a4a9e",
    borderRight: "none",
    fontWeight: "bold"
  }
};

// Emotion Styled
const Div = styled("div")`
  text-align: center;
`;

const cardWidth = css`
  padding: 10px;
`;

const SingleCard = props => {
  const { classes } = props;

  return (
    <div className={cardWidth}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='https://picsum.photos/200/300/?random'
          title="Card Title"
        />

        <Typography className={classes.prize} component="span">
          ৳ 292
        </Typography>

        <CardContent className={TextAlignCenter}>
          <Typography
            gutterBottom
            variant="headline"
            component="h3"
            className={classes.title}
          >
            Orange Stitched Semi Cotton Kameez (Bipasha)
          </Typography>
        </CardContent>

        <Div>
          <Stars />
          <CardActions className={classes.button}>
            <BuyBtn />
          </CardActions>
        </Div>
      </Card>
    </div>
  );
};

export default withStyles(styles)(SingleCard);
