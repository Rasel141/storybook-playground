import React from "react";

// Import Material Components
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

// Import Emotion Styles
import  {css} from 'emotion'

// Import Local Image
import shoppingCartImg from '../../imgs/shopping-cart.svg'

// Import Custom Style Variable
import  {darkYellow, darkGray} from "../styles/colors";


// Emotion Styles
const badge = css`
  span {
    border-radius: 6.2rem;
  background-color: ${darkYellow};
    color: ${darkGray};
    width: 1rem;
    height: .8rem;
    top: 2px;
    right: 0px;
  }`

const shoppingCart = () => {
  return (
    <div>
      <IconButton >
          <Badge badgeContent={4} className = {badge}>
            <div>
              <img src={shoppingCartImg} alt="Shopping Cart" title = "Shopping Cart"/>
            </div>
          </Badge>
        </IconButton>
    </div>
  );
};

export default shoppingCart;
