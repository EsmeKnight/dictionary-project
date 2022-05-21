import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Result from "./components/Result";
import Card from "./components/UI/Card";

function App() {
  const [enteredValue, setEnteredValue] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  const [wordData, setWordData] = useState([]);

  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/test/pertainsTo",
    headers: {
      "X-RapidAPI-Key": "50c9736a4dmshb9bb4dc16f53435p173d1fjsn6ea23a83913b",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  function fetchData() {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(event) {
    setEnteredValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchedValue(enteredValue);
    fetchData();
  }

  return (
    <>
      <Header
        onSubmit={handleSubmit}
        value={enteredValue}
        onChange={handleChange}
      ></Header>
    </>
  );
}

export default App;
