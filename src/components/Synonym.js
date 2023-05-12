const Synonym = ({ searchData }) => {
  return (
    <div className="mx-10">
      <h2 className="text-xl font-bold py-6">Synonym</h2>
      <div className="">
        {searchData?.meanings?.map((means) =>
          means?.synonyms?.slice(0, 3).map((ant,i) => <li key={i}>{ant}</li>)
        )}
      </div>
    </div>
  );
};

export default Synonym;
