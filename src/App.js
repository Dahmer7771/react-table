import React from "react";
import "./App.css";
import NewGoodTable from "./NewGoodTable";

const App = props => (
  <NewGoodTable className="GT1" initialHeight={4} initialWidth={4} cellSize={50} />
);

export default App;
