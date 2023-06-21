"use client";

import React from 'react';
import Typewriter from 'typewriter-effect';


const Typo = () => {
  const colors = ["violet", "blue", "green", "orange", "red"];
  const strings = ["découvrir des lieux magnifiques", "paradisiaques", "naturels", "historiques", "culturels"];
  
  return (
    <div className="w-full md:w-auto py-2 inline-block text-center md:text-left text-sm md:text-base font-medium">
      <div className="font-medium">
        <span style={{ color: colors[0] }}>Réserver maintenant et soyez prêt à </span>
        <Typewriter
          options={{
            strings: strings.map((text, index) => `<span style="color: ${colors[(index + 1) % colors.length]};">${text}</span>`),
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriter-wrapper" // Ajouter une classe CSS personnalisée pour le wrapper
          }}
        />
      </div>
    </div>
  );
}

export default Typo;

