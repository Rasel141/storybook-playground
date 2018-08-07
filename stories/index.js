import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { Button, Welcome } from "@storybook/react/demo";
import AppMine from "../src/components/AppMine";
import { SearchBar } from "../src/components/SearchBar";

storiesOf("Button", module);
// .add("with text", () => (
//   <Button onClick={action("clicked")}>Hello Button</Button>
// ))
// .add("with some emoji", () => (
//   <Button onClick={action("clicked")}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// ));

storiesOf("AppMine", module).add("default", () => <AppMine />);

storiesOf("Input Field", module).add("Search Bar", () => <SearchBar />);
