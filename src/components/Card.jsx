import React from "react";
import CardTemplate from "../templates/CardTemplate";



const dataQuotes = [
  {
    text: "Hello World",
    newText: "My Americano is bitter but your smile makes is sweet",
    bgImage: "assets/images/card-1.jpg",
  },
  {
    text: "Life Happens; Coffee Helps",
    newText: "Adulting is Hard; Coffee helps",
    bgImage: "assets/images/card-2.jpg",
  },
  {
    text: "Coffee is like a hug in a mug",
    newText: "A sip of a coffee and a story",
    bgImage: "assets/images/card-3.jpg",
  },
];

const Card = () => {
  return (
    <div className="flex justify-around mt-10">
      {dataQuotes.map((quote, index) => (
        <CardTemplate
          text={quote.text}
          bgImage={quote.bgImage}
          newText={quote.newText}
          key={index}
        />
      ))}
    </div>
  );
};

export default Card;
