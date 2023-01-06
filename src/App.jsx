import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
function App() {
  const [result, setResult] = useState("");
  const [searchedWord, setSearchedWord] = useState("");

  function fetchMeaning(e) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    if (searchedWord) {
      document.title = `Definiation of ${searchedWord}`;
      fetch(url)
        .then((data) => data.json())
        .then((data) =>
          setResult(data[0].meanings[0].definitions[0].definition)
        );
    } else {
      alert("Please enter word in the search bar and hit enter");
    }
    searchedWord("");
  }

  function setUserWord(e) {
    setSearchedWord(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <h1 className="title  ">Dictionary App</h1>
        <div className="navbar">
          {/* Logo */}
          <div className="site-logo">
            <img src={logo} />
          </div>

          {/* Search Bar */}
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search for words meaning, Ex: Hello"
              onChange={setUserWord}
            />
          </div>

          {/* Search Button */}
          <div className="searchButton">
            <button
              onSubmit={(e) => {
                e.target.value = "";
              }}
              type="submit"
              onClick={fetchMeaning}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Result */}
      <div>
        {result && (
          <div className="result-wrapper">
            <p className="result">{result}</p>
          </div>
        )}
      </div>

      <div className="footer">
        <p>
          <a href="https://twitter.com/themujahidkhan">
            {" "}
            Built By Mujahid Khan{" "}
          </a>
          Using{" "}
          <a href="https://dictionaryapi.dev" target="_blank">
            {" "}
            Free Dictionary API
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
