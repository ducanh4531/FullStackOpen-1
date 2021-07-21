import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [openView, setOpenView] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      // console.log(response.data[0]["name"]);
      setCountries(response.data);
      // console.log(countries);
      // console.log("17", countries[])
    });
  }, []);

  const searchResult =
    searchQuery === ""
      ? []
      : countries.filter((country) =>
          country["name"].toLowerCase().includes(searchQuery)
        );

  // const openView = (country) => {
  //   setOpenView(true)
  //   return ()
  // };

  return (
    <div>
      find countries:
      <input type="text" value={searchQuery} onChange={handleSearch} />
      {searchResult.length <= 10 && searchResult.length > 1 ? (
        searchResult.map((country) => <p>{country["name"]}</p>)
      ) : searchResult.length === 1 ? (
        searchResult.map((country) => {
          return (
            <div>
              <h2>{country["name"]}</h2>
              <p>capital {country["capital"]}</p>
              <p>population {country["population"]}</p>
              <h3>languages</h3>
              {country["languages"].map((language) => (
                <li>{language["name"]}</li>
              ))}{" "}
              <br />
              <img src={country["flag"]} alt="flag" height="100px" />
            </div>
          );
        })
      ) : searchResult.length === 0 ? (
        <p></p>
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
}

export default App;
