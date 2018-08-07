import React from "react";

// Material Components
import {Badge, IconButton} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";

// Import Emotion Styles
import { css } from "emotion";

// Import Custom Style Variable
import  {darkRed} from "../styles/colors";

// Emotion Styles
const badge = css`
  span {
    background-color: ${darkRed};
    width: 7px;
    height: 7px;
    top: -12px;
    right: -1px;
  }
`;

const toggleBtnSize = css`
  svg {
    font-size: 2.1rem;
  }
`;

const toggleBtn = () => {
  return (
    <div>
        <IconButton className={toggleBtnSize} color="inherit" aria-label="Menu">
          <MenuIcon />
          <Badge className={badge} />
        </IconButton>
    </div>
  );
};

export default toggleBtn;
