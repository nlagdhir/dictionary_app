import React, { useState } from "react";
import { useEffect } from "react";
import { RxSpeakerLoud } from "react-icons/rx";
import { Howl } from "howler";

function Header({
  searchData,
  searchValue,
  setSearchValue,
  handleSearch,
  handleKeyDown,
}) {
  const [audioSrc, setAudioSrc] = useState("");
  const [sounds, setSounds] = useState(false);
  useEffect(() => {
    if (searchData) {
      setAudioSrc(
        searchData?.phonetics[0]?.audio ||
          searchData?.phonetics[1]?.audio ||
          searchData?.phonetics[2]?.audio ||
          searchData?.phonetics[3]?.audio ||
          searchData?.phonetics[4]?.audio
      );
    }
  }, [searchData]);
  const playAudio = () => {
    const sound = new Howl({
      src: [audioSrc],
    });
    setSounds(true);
    sound.play();
  };

  return (
    <div className="md:h-[300px] md:w-1/3 md:p-2 flex justify-center bg-[#00203FFF] rounded-lg py-4">
      <div>
        <div>
          <input
            type="text"
            placeholder="Search Word..."
            value={searchValue}
            className="block  mt-2 w-[277px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-none outline-none bg-white px-5 py-2.5 text-gray-700"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="flex justify-center ">
          <button
            onClick={handleSearch}
            className="px-6 py-2 font-medium tracking-wide my-4 text-[#00203FFF] capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring bg-[#ADEFD1FF] "
          >
            Search
          </button>
        </div>
        {searchData && (
          <div>
            <p className="text-center text-lg py-2 text-white">
              Result for : <span className="font-bold">{searchData?.word}</span>
            </p>
            <p className="text-center py-1 bg-white">
              Part Of Speech -
              <span className="font-serif mx-1 italic">
                {searchData?.meanings[0]?.partOfSpeech}
              </span>
              <span className="font-serif italic">{searchData?.phonetic}</span>
            </p>
            <div className="flex justify-center items-center my-2 bg-white">
              <p className="px-1 py-1">Pronounce :</p>
              <RxSpeakerLoud
                onClick={playAudio}
                size={25}
                className={sounds ? "pt-1 ml-4 text-blue-500" : "pt-1 ml-4"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
