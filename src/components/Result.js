import React from "react";
import Antonym from "./Antonym";
import Loading from "./Loading";
import Meaning from "./Meaning";
import Synonym from "./Synonym";

function Result({ error, loading, errorElm, searchData }) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="md:w-2/3">
      {error ? (
        errorElm
      ) : (
        <div>
          {searchData && (
            <div>
              <Meaning searchData={searchData} />
              <div className="flex justify-start">
                <Synonym searchData={searchData} />
                <Antonym searchData={searchData} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Result;
