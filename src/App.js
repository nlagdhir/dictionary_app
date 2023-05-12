import axios from "axios";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Result from "./components/Result";
import { ImWarning } from "react-icons/im";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (searchValue) {
      try {
        setLoading(true);
        const res = await axios(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
        );
        setSearchData(res.data[0]);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      setSearchValue('')
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };



  let errorElm;
  errorElm = (
    <h3 className="text-center mt-10 flex justify-center items-center font-semibold text-red-500">
      <ImWarning className="mr-4" size={24} /> No Word Found
    </h3>
  );

  return (
    <div className="container mx-auto p-4 md:p-10">
      <div className="border bg-[#00203FFF] text-white px-4 py-2 my-4">
        <h1 className="text-center font-bold text-2xl font-mono">Dictionary</h1>
        <p className=" text-sm md:text-md text-center font-mono">
          Find meanings and definisions for word
        </p>
      </div>
      <div className="md:flex justify-between">
        <Header
          searchData={searchData}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          handleKeyDown={handleKeyDown}
        />
        <Result loading={loading} error={error} errorElm={errorElm} searchData={searchData} />
      </div>
    </div>
  );
}

export default App;
