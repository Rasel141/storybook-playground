import React from "react";

// Material Components
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";

// Import Emotion Styles
import { css } from "emotion";

// Import Custom Style Variable
import { darkGray, white } from "../styles/colors";

// Emotion Styles
const inputField = css`
  background-color: ${white};
  border: 1px solid ${darkGray};
  border-radius: 7px;

  input {
    padding-left: 5px;
    color: ${darkGray};
    width: 67px;
    font-size: 88%;
    transition: all 0.5s ease;
  }
`;

const inputFlex = css`
  flex-grow: 1;
  /* margin: 0 10px; */

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  svg {
    position: absolute;
    fill: ${darkGray};
    right: 5px;
    font-size: 1.25rem;
  }
`;

const searchBar = () => {
  return (
    <div className={inputFlex}>
      <Input
        placeholder="Search"
        className={`${inputField}`}
        disableUnderline
        fullWidth
      />
      <SearchIcon />
    </div>
  );
};

export {searchBar};
