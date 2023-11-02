import React from "react";
import { Greeting } from "../components/Greeting";
import { SingleQuote } from "../components/SingleQuote";
import { Time } from "../components/Clock";
import { Todo } from "../components/Todo";
import { Weather } from "../components/Weather";
import { useGlobal } from "../context/GlobalContext";

const MainPage = () => {
  const { setName, mainFocus, setMainFocus } = useGlobal();

  const editNameHandler = () => {
    localStorage.setItem("username", "");
    setName("");
  };

  const editFocusHandler = () => {
    localStorage.setItem("focus", "");
    setMainFocus("");
  };

  const focusHandler = (e) => {
    localStorage.setItem(
      "focus",
      `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`
    );
    setMainFocus(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Weather />
      <section>
        <Time />
        <Greeting />
        {mainFocus ? (
          <div className="focus">My main focus is {mainFocus}</div>
        ) : (
          <input
            type="text"
            className="focus-input"
            onKeyDown={(e) => e.code === "Enter" && focusHandler(e)}
            placeholder="Enter your main focus "
          />
        )}
        <SingleQuote />
        <Todo />
        <div className="btn-container">
          {mainFocus !== null && (
            <button className="btns" onClick={editFocusHandler}>
              edit focus
            </button>
          )}
          <button className="btns" onClick={editNameHandler}>
            edit name
          </button>
        </div>
      </section>
    </div>
  );
};

export { MainPage };
