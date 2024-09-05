import { useState, useEffect } from 'react';
import MemoryCard from './MemoryCard';

const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${Math.floor(Math.random() * (1024 - 0 + 1) + 0)}`;

const MemoryCards = () => {
  console.log(apiUrl);
  return <div>MemoryCards</div>;
};

export default MemoryCards;
