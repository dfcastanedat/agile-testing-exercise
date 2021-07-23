import React from "react";
import "./styles.css";

const App = ({ onSubmit }) => {
  const [name, setName] = React.useState("John Doe");

  return (
    <form
      className="App__input-container"
      onSubmit={(e) => {
        onSubmit(e);
        e.preventDefault();
      }}
    >
      <label htmlFor="input">First Name</label>
      <input
        data-testid="input"
        id="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="firstName"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default App;
