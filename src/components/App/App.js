import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const items = [
  {
    id: 1,
    value: "Pulp Fiction"
  },
  {
    id: 2,
    value: "The Prestige"
  },
  {
    id: 3,
    value: "Blade Runner 2049"
  }
];
const App = () => {
  return (
    <div className="container">
      <Dropdown title={"Choose movies"} items={items} />
    </div>
  );
};

export default App;
