import React, { useState } from "react";
import Card from "../Components/Cards/Card.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import pokemon1 from "../assets/pikachu.jpg";
import pokemon2 from "../assets/pokemon2.jpg";
import pokemon3 from "../assets/pokemon3.jpg";
import pokemon4 from "../assets/pokemon4.jpg";

function CardPage() {
  const pokemons = [
    {
      image: pokemon1,
      name: "Pikachu",
      type: "Electric Type ⚡",
      stats: [
        { label: "HP", value: 80 },
        { label: "Attack", value: 55 },
        { label: "Defense", value: 40 },
        { label: "Speed", value: 90 },
      ],
      description:
        "Pikachu is an Electric-type Pokémon known for its friendly and loyal nature. It stores electricity in its cheeks and releases it in lightning-fast attacks.",
    },
    {
      image: pokemon2,
      name: "Mewtwo",
      type: "Psychic Type 🔮",
      stats: [
        { label: "HP", value: 120 },
        { label: "Attack", value: 110 },
        { label: "Defense", value: 90 },
        { label: "Speed", value: 130 },
      ],
      description:
        "Mewtwo is a Legendary Psychic Pokémon created from Mew's DNA. It possesses incredible mental powers and unmatched intelligence.",
    },
    {
      image: pokemon3,
      name: "Charizard",
      type: "Fire Type 🔥",
      stats: [
        { label: "HP", value: 95 },
        { label: "Attack", value: 85 },
        { label: "Defense", value: 70 },
        { label: "Speed", value: 100 },
      ],
      description:
        "Charizard is a fierce Fire/Flying Pokémon. It breathes scorching flames capable of melting anything in its path.",
    },
    {
      image: pokemon4,
      name: "Blazefang",
      type: "Fire Type 🔥",
      stats: [
        { label: "HP", value: 88 },
        { label: "Attack", value: 105 },
        { label: "Defense", value: 72 },
        { label: "Speed", value: 98 },
      ],
      description:
        "Blazefang is a powerful Fire-type Pokémon with sharp instincts and blazing attacks that light up battlefields.",
    },
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 h-screen w-full bg-gradient-to-b from-[#0f172a] via-[#090f19] to-[#070b14] p-6 pt-20 sm:p-10 sm:pt-24 box-border overflow-y-auto">
      {pokemons.map((poke, index) => (
        <Card
          key={index}
          image={poke.image}
          name={poke.name}
          type={poke.type}
          stats={poke.stats}
          onClick={() => setSelectedPokemon(poke)}
        />
      ))}

      {selectedPokemon && (
        <Banner
          image={selectedPokemon.image}
          name={selectedPokemon.name}
          description={selectedPokemon.description}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}

export default CardPage;