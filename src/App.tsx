import { useState } from "react";
import linksdata from "./data.json";
import "./App.css";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div className="container">
        {linksdata
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return val;
            } else if (
              val.tags.language
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return val;
            } else if (
              val.tags.type
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((value, keyid) => {
            return (
              <a
                href={value.link}
                rel="noreferrer"
                target="_blank"
                className="helplink"
                key={keyid}>
                <h1 className="title">{value.title}</h1>
                <span className="description">{value.description}</span>
                <span className="lang">
                  {value.tags.language + " - " + value.tags.type.toUpperCase()}
                </span>
              </a>
            );
          })}
      </div>
    </div>
  );
};
