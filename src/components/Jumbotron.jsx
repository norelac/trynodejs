import React, { useState } from "react";

const Tampilan1 = ({ display, setDisplay }) => {
  return (
    <div
      className={`container mx-auto p-8 absolute inset-0 flex flex-col gap-y-2 justify-center items-start transition-opacity duration-500 ${
        display === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h1 className="font-bold text-7xl">FOSS Café</h1>
      <p className="font-medium text-2xl md:w-1/2">
        "Fuel Your Ideas, Brew Your Code"
      </p>
      <button
        onClick={setDisplay}
        className="bg-amber-700 font-medium text-lg px-4 py-2 mt-5 rounded-xl"
      >
        Change Quote
      </button>
    </div>
  );
};

const Tampilan2 = ({ display, setDisplay }) => {
  return (
    <div
      className={`container mx-auto p-8 absolute inset-0 flex flex-col gap-y-2 justify-center items-start transition-opacity duration-500 ${
        display === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h1 className="font-bold text-7xl mb-2">FOSS Café</h1>
      <p className="font-medium text-2xl md:w-1/2">
        Where coffee fuels code and ideas spark collaboration. A space for
        innovators, creators, and open-source enthusiasts to connect, share, and
        build the future together.
        <br className="mb-4" />
        <span className="font-semibold">
          Every great idea begins with one commit.
        </span>
      </p>
      <button
        onClick={setDisplay}
        className="bg-amber-700 font-medium text-lg px-4 py-2 mt-5 rounded-xl"
      >
        Change Quote
      </button>
    </div>
  );
};

const Jumbotron = () => {
  const [display, setDisplay] = useState(0);
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('assets/images/hero.jpg')" }}
    >
      <div className="h-full w-full bg-gradient-to-r from-black text-white flex items-center relative">
        {/* Tampilan 1 */}
        <Tampilan1 display={display} setDisplay={() => setDisplay(1)} />
        {/* Tampilan 2 */}
        <Tampilan2 display={display} setDisplay={() => setDisplay(0)} />
      </div>
    </div>
  );
};

export default Jumbotron;
