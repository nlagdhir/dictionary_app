const Synonym = ({ searchData }) => {
  return (
    <div className="md:mx-10">
      <h2 className="text-xl font-bold py-6">Antonym</h2>
      <div className="">
        {searchData?.meanings?.map((means) =>
          means?.antonyms?.slice(0, 3).map((ant, i) => <li key={i}>{ant}</li>)
        )}
      </div>
    </div>
  );
};

export default Synonym;
