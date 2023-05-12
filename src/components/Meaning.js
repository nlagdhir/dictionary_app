import React from "react";

function Meaning({ searchData }) {
  return (
    <div className="mx-4 md:mx-10 py-4">
      <div>
        <h2 className="text-xl font-semibold">Meaning with Definitions</h2>
        <ul>
          {searchData?.meanings?.map((means) =>
            means?.definitions
              ?.slice(0,2).map((def) => (
                <div key={def.definition}>
                  <li className="py-2 list-disc mx-4 md:mx-10">
                    {def.definition}
                  </li>
                  <hr />
                </div>
              ))
              
          )}
        </ul>
      </div>
    </div>
  );
}

export default Meaning;
